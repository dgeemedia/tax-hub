import { NextResponse } from "next/server"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"
import { prisma } from "@/lib/db"

export async function POST(req: Request) {
  try {
    const session = await getServerSession(authOptions)
    
    if (!session?.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const body = await req.json()
    const { taxYear, grossIncome, taxableIncome, taxAmount } = body

    const taxReturn = await prisma.taxReturn.create({
      data: {
        userId: session.user.id,
        taxYear,
        grossIncome,
        taxableIncome,
        taxAmount,
        status: "SUBMITTED",
        filedAt: new Date()
      }
    })

    return NextResponse.json({ success: true, taxReturn })
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to file tax return" },
      { status: 500 }
    )
  }
}