import { NextResponse } from "next/server"
import { verifyPayment } from "@/lib/paystack"
import { prisma } from "@/lib/db"

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url)
    const reference = searchParams.get("reference")

    if (!reference) {
      return NextResponse.redirect(`${process.env.NEXT_PUBLIC_APP_URL}/dashboard?payment=failed`)
    }

    // Verify payment with Paystack
    const verification = await verifyPayment(reference)

    if (verification.data.status === "success") {
      // Update payment record
      const payment = await prisma.payment.update({
        where: { reference },
        data: {
          status: "COMPLETED",
          paidAt: new Date()
        },
        include: {
          user: {
            include: {
              corporateProfile: true
            }
          }
        }
      })

      // Update subscription if corporate payment
      if (payment.user.userType === "CORPORATE" && payment.user.corporateProfile) {
        const subscriptionEnd = new Date()
        subscriptionEnd.setFullYear(subscriptionEnd.getFullYear() + 1)

        await prisma.corporateProfile.update({
          where: { id: payment.user.corporateProfile.id },
          data: {
            isPaid: true,
            subscriptionExpiry: subscriptionEnd
          }
        })
      }

      return NextResponse.redirect(`${process.env.NEXT_PUBLIC_APP_URL}/dashboard?payment=success`)
    } else {
      return NextResponse.redirect(`${process.env.NEXT_PUBLIC_APP_URL}/dashboard?payment=failed`)
    }
  } catch (error: any) {
    console.error("Payment verification error:", error)
    return NextResponse.redirect(`${process.env.NEXT_PUBLIC_APP_URL}/dashboard?payment=error`)
  }
}