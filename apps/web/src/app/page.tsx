import { Hero } from "@/components/home/Hero"
import { Features } from "@/components/home/Features"
import { HowItWorks } from "@/components/home/HowItWorks"
import { Pricing } from "@/components/home/Pricing"
import { Testimonials } from "@/components/home/Testimonials"
import { CTA } from "@/components/home/CTA"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <Pricing />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  )
}