import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, Sparkles, Users, Crown } from "lucide-react"
import Link from "next/link"

const tiers = [
  {
    name: "DIY Assisted",
    price: "₦50,000",
    icon: Sparkles,
    description: "Perfect for startups and small businesses",
    popular: false,
    features: [
      "AI-powered financial statement builder",
      "Step-by-step guided process",
      "Automated calculations & entries",
      "Basic professional review",
      "Email support",
      "Standard IFRS templates",
      "1 revision included",
      "7-10 days delivery"
    ],
    cta: "Start DIY",
    href: "/register?service=fs-diy"
  },
  {
    name: "Professional Review",
    price: "₦120,000",
    icon: Users,
    description: "Most popular - Best value for growing businesses",
    popular: true,
    features: [
      "Everything in DIY Assisted",
      "ICAN/ACCA certified accountant review",
      "Detailed accuracy verification",
      "Professional recommendations",
      "Priority support",
      "Advanced IFRS compliance check",
      "3 revisions included",
      "5-7 days delivery",
      "Tax optimization insights"
    ],
    cta: "Get Professional Review",
    href: "/register?service=fs-pro"
  },
  {
    name: "Full Service",
    price: "₦200,000",
    icon: Crown,
    description: "Complete done-for-you service",
    popular: false,
    features: [
      "Everything in Professional Review",
      "Dedicated certified accountant",
      "Complete hands-off preparation",
      "Advanced financial analysis",
      "Custom financial insights report",
      "Phone & video consultations",
      "Unlimited revisions",
      "3-5 days express delivery",
      "Year-round advisory support",
      "CAC & FIRS filing assistance"
    ],
    cta: "Go Full Service",
    href: "/register?service=fs-full"
  }
]

export function ServiceTiers() {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold mb-4">Choose Your Service Level</h2>
          <p className="text-xl text-muted-foreground">
            From DIY with AI assistance to complete done-for-you service
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {tiers.map((tier, index) => {
            const Icon = tier.icon
            return (
              <Card
                key={index}
                className={`relative ${
                  tier.popular ? "border-primary shadow-2xl scale-105 z-10" : "border-2"
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-primary text-white px-4 py-1 rounded-full text-sm font-medium">
                      MOST POPULAR
                    </span>
                  </div>
                )}
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <Icon className={`h-6 w-6 ${tier.popular ? 'text-primary' : 'text-muted-foreground'}`} />
                    <CardTitle className="text-2xl">{tier.name}</CardTitle>
                  </div>
                  <CardDescription>{tier.description}</CardDescription>
                  <div className="pt-4">
                    <span className="text-4xl font-bold">{tier.price}</span>
                    <span className="text-muted-foreground">/year</span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <ul className="space-y-3">
                    {tier.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href={tier.href} className="block">
                    <Button
                      className="w-full"
                      variant={tier.popular ? "default" : "outline"}
                      size="lg"
                    >
                      {tier.cta}
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Not sure which plan is right for you?
          </p>
          <Link href="/contact">
            <Button variant="outline" size="lg">
              Schedule a Free Consultation
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}