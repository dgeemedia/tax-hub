// apps/web/src/app/api/upload/route.ts
import { NextResponse } from "next/server"
import { auth } from "@/lib/auth"  // Changed
import { uploadToCloudinary } from "@/lib/upload"
import { prisma } from "@/lib/db"

export async function POST(req: Request) {
  try {
    const session = await auth()  // Changed
    
    if (!session?.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const formData = await req.formData()
    const file = formData.get("file") as File
    const type = formData.get("type") as string

    if (!file) {
      return NextResponse.json({ error: "No file provided" }, { status: 400 })
    }

    // Upload to Cloudinary
    const result = await uploadToCloudinary(file, `taxhub/${session.user.id}`)

    // Save to database
    const document = await prisma.document.create({
      data: {
        userId: session.user.id,
        fileName: file.name,
        fileUrl: result.url,
        fileSize: result.size,
        type: type || "OTHER"
      }
    })

    return NextResponse.json({
      success: true,
      document,
      url: result.url
    })
  } catch (error: any) {
    console.error("Upload error:", error)
    return NextResponse.json(
      { error: error.message || "Upload failed" },
      { status: 500 }
    )
  }
}