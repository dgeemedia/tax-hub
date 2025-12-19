"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, CheckCircle, TrendingDown, Users } from "lucide-react"

export function FinancialStatementsHero() {
  return (
    <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-blue-50 via-white to-green-50">
      <div className="container mx-auto">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm font-medium">
            <TrendingDown className="h-4 w-4" />
            Save 70% on Professional Financial Statements
          </div>

          <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
            Professional Financial Statements at{" "}
            <span className="text-primary">Fraction of the Cost</span>
          </h1>

          <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            Why spend ₦500k-₦2M on traditional accounting firms? Get certified, professional-grade 
            financial statements starting from <strong>₦50,000</strong> with our AI-assisted platform 
            and expert review process.
          </p>

          <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto pt-8">
            <div className="flex items-start gap-3 text-left">
              <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold">AI-Assisted Preparation</p>
                <p className="text-sm text-muted-foreground">Smart automation reduces time by 80%</p>
              </div>
            </div>
            <div className="flex items-start gap-3 text-left">
              <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold">Certified Professionals</p>
                <p className="text-sm text-muted-foreground">ICAN/ACCA certified accountants review</p>
              </div>
            </div>
            <div className="flex items-start gap-3 text-left">
              <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold">IFRS Compliant</p>
                <p className="text-sm text-muted-foreground">Meets all regulatory standards</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link href="/register?service=financial-statements">
              <Button size="lg" className="text-lg px-8">
                Get Started - From ₦50k
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="#comparison">
              <Button size="lg" variant="outline" className="text-lg px-8">
                See Pricing Comparison
              </Button>
            </Link>
          </div>

          <p className="text-sm text-muted-foreground pt-4">
            <Users className="inline h-4 w-4 mr-1" />
            Trusted by 500+ Nigerian SMEs and startups
          </p>
        </div>
      </div>
    </section>
  )
}