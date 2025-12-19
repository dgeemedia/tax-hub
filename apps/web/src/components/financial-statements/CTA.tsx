import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Calendar } from "lucide-react"

export function CTA() {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-primary via-green-600 to-green-800 text-white">
      <div className="container mx-auto text-center max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Ready to Get Professional Financial Statements?
        </h2>
        <p className="text-xl mb-8 opacity-90">
          Stop overpaying for financial statements. Get started today and save up to 70% 
          while maintaining the highest professional standards.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/register?service=financial-statements">
            <Button size="lg" variant="secondary" className="text-lg px-8">
              Get Started - From ₦50k
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
          <Link href="/contact">
            <Button size="lg" variant="outline" className="text-lg px-8 bg-transparent text-white border-white hover:
            bg-white hover:text-primary">
            <Calendar className="mr-2 h-5 w-5" />
            Schedule Free Consultation
            </Button>
          </Link>
        </div>
            <p className="mt-8 text-sm opacity-80">
            ⚡ Limited slots available - 50+ businesses served this month
            </p>
        </div>
    </section>
    )
}