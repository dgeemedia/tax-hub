import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check, Crown } from "lucide-react"

export default function SubscriptionPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Subscription</h1>
        <p className="text-muted-foreground">
          Manage your corporate subscription plan
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Current Plan</CardTitle>
            <CardDescription>Your active subscription</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-2">
              <Crown className="h-5 w-5 text-yellow-600" />
              <span className="font-bold text-lg">Corporate Pro</span>
            </div>
            <div>
              <p className="text-3xl font-bold">₦50,000</p>
              <p className="text-muted-foreground">/year</p>
            </div>
            <div className="space-y-2">
              <p className="text-sm font-medium">Status: <span className="text-green-600">Active</span></p>
              <p className="text-sm text-muted-foreground">Renews on: December 31, 2025</p>
            </div>
            <Button variant="outline" className="w-full">Manage Subscription</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Plan Features</CardTitle>
            <CardDescription>What's included in your plan</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {[
                "Unlimited financial statement uploads",
                "AI-powered tax analysis",
                "Corporate tax calculations",
                "Compliance tracking",
                "Priority support",
                "Custom reports",
                "Multi-user access"
              ].map((feature, i) => (
                <li key={i} className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-600" />
                  <span className="text-sm">{feature}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}