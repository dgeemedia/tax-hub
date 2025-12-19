import { Shield, Clock, TrendingDown, Award, HeadphonesIcon, RefreshCw } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const benefits = [
  {
    icon: TrendingDown,
    title: "Save 70% on Costs",
    description: "Get professional-grade financial statements at a fraction of traditional accounting firm prices."
  },
  {
    icon: Clock,
    title: "10x Faster Delivery",
    description: "AI automation reduces preparation time from weeks to just 3-7 days without compromising quality."
  },
  {
    icon: Award,
    title: "Certified Professionals",
    description: "All statements reviewed and endorsed by ICAN/ACCA certified chartered accountants."
  },
  {
    icon: Shield,
    title: "100% Compliant",
    description: "Fully compliant with IFRS, Nigerian GAAP, and all CAC/FIRS requirements."
  },
  {
    icon: RefreshCw,
    title: "Free Revisions",
    description: "Unlimited revisions on Full Service plan. We work until you're completely satisfied."
  },
  {
    icon: HeadphonesIcon,
    title: "Dedicated Support",
    description: "Direct access to your assigned accountant and priority customer support."
  }
]

export function WhyChooseUs() {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold mb-4">Why Choose TaxHub NG?</h2>
          <p className="text-xl text-muted-foreground">
            The perfect blend of AI efficiency and human expertise
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <Card key={index} className="border-2 hover:border-primary/50 transition-colors">
                <CardHeader>
                  <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}