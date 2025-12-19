import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const faqs = [
  {
    question: "Are your financial statements legally valid?",
    answer: "Yes! All our financial statements are reviewed and endorsed by ICAN/ACCA certified chartered accountants. They are fully compliant with IFRS and Nigerian GAAP, and accepted by all Nigerian regulatory bodies including CAC, FIRS, and commercial banks."
  },
  {
    question: "How does the AI-assisted process work?",
    answer: "Our AI analyzes your business documents, categorizes transactions, identifies patterns, and auto-populates your financial statements. This reduces manual data entry by 80%. A certified human accountant then reviews everything for accuracy and compliance before final approval."
  },
  {
    question: "What documents do I need to provide?",
    answer: "You'll need: bank statements, receipts, invoices, payroll records, and any existing bookkeeping records. Don't worry if your records aren't perfect - our team can help organize and clean up your data."
  },
  {
    question: "Can I switch between service tiers?",
    answer: "Absolutely! You can start with DIY Assisted and upgrade to Professional Review or Full Service at any time. You'll only pay the difference."
  },
  {
    question: "What if I'm not satisfied with the statements?",
    answer: "We offer free revisions on all plans. For Full Service clients, revisions are unlimited. We work with you until you're completely satisfied with the final product."
  },
  {
    question: "Do you handle audits?",
    answer: "While we prepare financial statements, statutory audits require a separate engagement. However, our statements are audit-ready and we can connect you with partner audit firms at discounted rates."
  }
]

export function FAQ() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-muted-foreground">
            Everything you need to know about our service
          </p>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="text-lg">{faq.question}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{faq.answer}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}