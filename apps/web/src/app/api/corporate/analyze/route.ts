import { NextResponse } from "next/server"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"
import { uploadToCloudinary } from "@/lib/upload"
import { prisma } from "@/lib/db"
import OpenAI from "openai"
import { calculateCorporateTax } from "tax-engine"

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
})

export async function POST(req: Request) {
  try {
    const session = await getServerSession(authOptions)
    
    if (!session?.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    // Check if user is corporate
    const user = await prisma.user.findUnique({
      where: { id: session.user.id },
      include: { corporateProfile: true }
    })

    if (user?.userType !== "CORPORATE") {
      return NextResponse.json(
        { error: "This feature is only available for corporate accounts" },
        { status: 403 }
      )
    }

    // Check subscription
    if (!user.corporateProfile?.isPaid) {
      return NextResponse.json(
        { error: "Please upgrade to access AI analysis" },
        { status: 403 }
      )
    }

    const formData = await req.formData()
    const file = formData.get("file") as File
    const financialYear = parseInt(formData.get("financialYear") as string)

    if (!file) {
      return NextResponse.json({ error: "No file provided" }, { status: 400 })
    }

    // Upload file to Cloudinary
    const uploadResult = await uploadToCloudinary(
      file,
      `taxhub/${session.user.id}/financial-statements`
    )

    // Convert to base64 for OpenAI
    const bytes = await file.arrayBuffer()
    const buffer = Buffer.from(bytes)
    const base64 = buffer.toString('base64')

    // Analyze with OpenAI
    const response = await openai.chat.completions.create({
      model: "gpt-4-vision-preview",
      messages: [
        {
          role: "user",
          content: [
            {
              type: "text",
              text: `You are a Nigerian tax expert. Analyze this financial statement and extract:
1. Total Revenue (in Naira)
2. Total Expenses (in Naira)
3. Net Profit/Loss (in Naira)
4. Total Assets (in Naira)
5. Total Liabilities (in Naira)

Also provide 3-5 tax optimization recommendations based on Nigerian tax laws.

Return ONLY a JSON object with these exact keys:
{
  "revenue": number,
  "expenses": number,
  "profit": number,
  "assets": number,
  "liabilities": number,
  "recommendations": [string, string, ...]
}

All numeric values must be numbers without currency symbols or commas.`
            },
            {
              type: "image_url",
              image_url: {
                url: `data:${file.type};base64,${base64}`
              }
            }
          ]
        }
      ],
      max_tokens: 1500
    })

    const content = response.choices[0].message.content
    let extractedData
    
    try {
      // Remove markdown code blocks if present
      const cleanContent = content?.replace(/```json\n?|\n?```/g, '') || '{}'
      extractedData = JSON.parse(cleanContent)
    } catch (error) {
      return NextResponse.json(
        { error: "Failed to parse AI response" },
        { status: 500 }
      )
    }

    // Calculate tax
    const taxAnalysis = calculateCorporateTax(
      extractedData.revenue,
      extractedData.expenses
    )

    // Save financial statement
    const financialStatement = await prisma.financialStatement.create({
      data: {
        corporateId: user.corporateProfile.id,
        financialYear,
        fileName: file.name,
        fileUrl: uploadResult.url,
        fileType: file.type,
        processed: true,
        extractedData: extractedData
      }
    })

    // Save tax analysis
    const analysis = await prisma.taxAnalysis.create({
      data: {
        corporateId: user.corporateProfile.id,
        financialStatementId: financialStatement.id,
        revenue: extractedData.revenue,
        expenses: extractedData.expenses,
        profit: extractedData.profit,
        corporateTax: taxAnalysis.corporateTax,
        totalTaxLiability: taxAnalysis.totalTaxLiability,
        recommendations: extractedData.recommendations
      }
    })

    return NextResponse.json({
      success: true,
      extractedData,
      taxAnalysis: {
        ...taxAnalysis,
        recommendations: extractedData.recommendations
      },
      analysisId: analysis.id
    })
  } catch (error: any) {
    console.error("Analysis error:", error)
    return NextResponse.json(
      { error: error.message || "Analysis failed" },
      { status: 500 }
    )
  }
}