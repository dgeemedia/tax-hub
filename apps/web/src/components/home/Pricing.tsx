import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Check } from "lucide-react"
import Link from "next/link"

const plans = [
  {
    name: "Individual",
    price: "Free",
    description: "Perfect for personal tax management",
    features: [
      "Basic tax calculator",
      "1 tax filing per year",
      "Email support",
      "Tax guides & resources",
      "Payment integration"
    ],
    cta: "Get Started",
    href: "/register?type=individual",
    popular: false
  },
  {
    name: "Individual Pro",
    price: "₦5,000",
    period: "/year",
    description: "For serious tax management",
    features: [
      "Advanced tax calculator",
      "Unlimited tax filings",
      "Document storage (5GB)",
      "Priority email support",
      "Tax reminders & alerts",
      "Historical data access"
    ],
    cta: "Upgrade Now",
    href: "/register?type=individual&plan=pro",
    popular: true
  },
  {
    name: "Corporate",
    price: "From ₦50,000",
    period: "/year",
    description: "AI-powered corporate tax management",
    features: [
      "AI document analysis",
      "Unlimited financial uploads",
      "Corporate tax calculations",
      "Compliance tracking",
      "Dedicated support",
      "Custom tax reports",
      "Multi-user access",
      "API access"
    ],
    cta: "Contact Sales",
    href: "/register?type=corporate",
    popular: false
  }
]

export function Pricing() {
  return (
    <section id="pricing" className="py-20 px-4 bg-white">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
          <p className="text-xl text-muted-foreground">
            Choose the plan that's right for you. No hidden fees, no surprises.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative ${
                plan.popular ? "border-primary shadow-lg scale-105" : ""
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-primary text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}
              <CardHeader>
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
                <div className="pt-4">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  {plan.period && (
                    <span className="text-muted-foreground">{plan.period}</span>
                  )}
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link href={plan.href} className="block">
                  <Button
                    className="w-full"
                    variant={plan.popular ? "default" : "outline"}
                    size="lg"
                  >
                    {plan.cta}
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}