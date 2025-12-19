// apps/web/src/app/financial-statements/page.tsx
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { FinancialStatementsHero } from "@/components/financial-statements/Hero"
import { ComparisonSection } from "@/components/financial-statements/Comparison"
import { HowItWorks } from "@/components/financial-statements/HowItWorks"
import { ServiceTiers } from "@/components/financial-statements/ServiceTiers"
import { WhyChooseUs } from "@/components/financial-statements/WhyChooseUs"
import { FAQ } from "@/components/financial-statements/FAQ"
import { CTA } from "@/components/financial-statements/CTA"

export default function FinancialStatementsPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <FinancialStatementsHero />
      <ComparisonSection />
      <ServiceTiers />
      <HowItWorks />
      <WhyChooseUs />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  )
}