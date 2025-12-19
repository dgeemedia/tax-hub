import { Upload, Bot, UserCheck, FileCheck } from "lucide-react"

const steps = [
  {
    icon: Upload,
    title: "Upload Your Documents",
    description: "Securely upload your business records, bank statements, receipts, and invoices. Our system accepts various formats."
  },
  {
    icon: Bot,
    title: "AI Processes Your Data",
    description: "Our intelligent AI categorizes transactions, identifies patterns, and auto-populates your financial statements following IFRS standards."
  },
  {
    icon: UserCheck,
    title: "Expert Review & Validation",
    description: "ICAN/ACCA certified professionals review, verify accuracy, and ensure compliance with Nigerian accounting standards."
  },
  {
    icon: FileCheck,
    title: "Receive Certified Statements",
    description: "Get your professional financial statements with certification, ready for submission to CAC, banks, or tax authorities."
  }
]

export function HowItWorks() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-xl text-muted-foreground">
            From upload to certified statements in 4 simple steps
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div key={index} className="relative">
                <div className="text-center space-y-4">
                  <div className="mx-auto h-16 w-16 bg-primary rounded-full flex items-center justify-center relative">
                    <Icon className="h-8 w-8 text-white" />
                    <span className="absolute -top-2 -right-2 h-8 w-8 bg-white border-2 border-primary rounded-full flex items-center justify-center text-sm font-bold text-primary">
                      {index + 1}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-1/2 w-full h-0.5 bg-primary/20"></div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}