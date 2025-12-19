import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function CTA() {
  return (
    <section className="py-20 px-4 bg-primary text-white">
      <div className="container mx-auto text-center max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Ready to Simplify Your Tax Compliance?
        </h2>
        <p className="text-xl mb-8 opacity-90">
          Join thousands of Nigerians who trust TaxHub NG for their tax management.
          Get started today—it's free!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/register">
            <Button size="lg" variant="secondary" className="text-lg px-8">
              Create Free Account
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
          <Link href="/login">
            <Button size="lg" variant="outline" className="text-lg px-8 bg-transparent text-white border-white hover:bg-white hover:text-primary">
              Sign In
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}