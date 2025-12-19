import { Calculator, FileText, Shield, Zap, Brain, CreditCard } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const features = [
  {
    icon: Calculator,
    title: "Smart Tax Calculator",
    description: "Calculate your personal or corporate tax instantly with our intelligent calculator powered by Nigerian tax laws."
  },
  {
    icon: Brain,
    title: "AI Document Analysis",
    description: "Upload your financial statements and let our AI analyze and calculate your tax liability automatically."
  },
  {
    icon: FileText,
    title: "Easy Tax Filing",
    description: "File your taxes online with our step-by-step guided process. No more paperwork or confusion."
  },
  {
    icon: Shield,
    title: "Secure & Compliant",
    description: "Bank-level encryption and full compliance with FIRS regulations. Your data is always protected."
  },
  {
    icon: Zap,
    title: "Instant Results",
    description: "Get real-time tax calculations and recommendations. No more waiting or guessing."
  },
  {
    icon: CreditCard,
    title: "Integrated Payments",
    description: "Pay your taxes directly through our platform with Paystack. Quick, secure, and hassle-free."
  }
]

export function Features() {
  return (
    <section id="features" className="py-20 px-4 bg-white">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Everything You Need for Tax Compliance
          </h2>
          <p className="text-xl text-muted-foreground">
            Powerful features designed to make Nigerian tax management simple, accurate, and stress-free.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Card key={index} className="border-2 hover:border-primary/50 transition-colors">
                <CardHeader>
                  <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}