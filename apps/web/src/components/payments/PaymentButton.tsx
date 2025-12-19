"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast"
import { Loader2 } from "lucide-react"

interface PaymentButtonProps {
  amount: number
  purpose: string
  plan?: string
  label?: string
  onSuccess?: () => void
}

export function PaymentButton({
  amount,
  purpose,
  plan,
  label = "Pay Now",
  onSuccess
}: PaymentButtonProps) {
  const { toast } = useToast()
  const [loading, setLoading] = useState(false)

  const handlePayment = async () => {
    setLoading(true)

    try {
      const response = await fetch("/api/payments/initialize", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount, purpose, plan })
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Payment initialization failed")
      }

      // Redirect to Paystack payment page
      window.location.href = data.authorizationUrl
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive"
      })
      setLoading(false)
    }
  }

  return (
    <Button onClick={handlePayment} disabled={loading} size="lg" className="w-full">
      {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
      {label}
    </Button>
  )
}