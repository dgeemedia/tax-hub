// apps/web/src/app/api/payments/initialize/route.ts
import { NextResponse } from "next/server"
import { auth } from "@/lib/auth"
import { initializePayment } from "@/lib/paystack"
import { prisma } from "@/lib/db"

export async function POST(req: Request) {
  try {
    const session = await auth()
    
    if (!session?.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const { amount, purpose, plan } = await req.json()

    const user = await prisma.user.findUnique({
      where: { id: session.user.id }
    })

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 })
    }

    const reference = `TXH-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`

    // Create payment record with purpose & plan
    const payment = await prisma.payment.create({
      data: {
        userId: session.user.id,
        amount,
        reference,
        purpose,
        plan,
        status: "PENDING"
      }
    })

    const paystackResponse = await initializePayment(
      user.email,
      amount,
      reference,
      { userId: session.user.id, paymentId: payment.id, purpose, plan }
    )

    return NextResponse.json({
      success: true,
      authorizationUrl: paystackResponse.data.authorization_url,
      reference: paystackResponse.data.reference
    })
  } catch (error: any) {
    console.error("Payment initialization error:", error)
    return NextResponse.json(
      { error: error.message || "Payment initialization failed" },
      { status: 500 }
    )
  }
}
