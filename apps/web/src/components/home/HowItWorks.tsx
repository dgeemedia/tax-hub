import { UserPlus, Calculator, FileCheck, CheckCircle } from "lucide-react"

const steps = [
  {
    icon: UserPlus,
    title: "Create Your Account",
    description: "Sign up in minutes with your email and basic information. Choose between individual or corporate account."
  },
  {
    icon: Calculator,
    title: "Calculate Your Tax",
    description: "Use our smart calculator or upload your financial documents for AI-powered analysis."
  },
  {
    icon: FileCheck,
    title: "File Your Return",
    description: "Complete your tax filing with our guided process. We'll help you every step of the way."
  },
  {
    icon: CheckCircle,
    title: "Stay Compliant",
    description: "Track your filings, receive reminders, and maintain perfect compliance with FIRS."
  }
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 px-4 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-xl text-muted-foreground">
            Get started with TaxHub NG in four simple steps
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div key={index} className="relative">
                <div className="text-center space-y-4">
                  <div className="mx-auto h-16 w-16 bg-primary rounded-full flex items-center justify-center">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}