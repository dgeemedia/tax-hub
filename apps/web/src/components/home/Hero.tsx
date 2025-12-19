"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Shield, Zap } from "lucide-react"

export function Hero() {
  return (
    <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-green-50 via-white to-blue-50">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-block">
              <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                Your Trusted Nigerian Tax Solution
              </span>
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              Simplify Your{" "}
              <span className="text-primary">Tax Compliance</span> in Nigeria
            </h1>

            <p className="text-xl text-muted-foreground leading-relaxed">
              Calculate, file, and manage your taxes with ease. Whether you're an individual or a corporation, 
              TaxHub NG makes Nigerian tax compliance effortless with AI-powered tools and expert guidance.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/register">
                <Button size="lg" className="text-lg px-8">
                  Get Started Free
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="#features">
                <Button size="lg" variant="outline" className="text-lg px-8">
                  Learn More
                </Button>
              </Link>
            </div>

            <div className="flex items-center gap-8 pt-4">
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium">Bank-level Security</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium">Instant Calculations</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-8 border">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold">Tax Calculator</h3>
                  <div className="h-5 w-5 rounded-full bg-primary/20"></div>
                </div>
                
                <div className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Annual Income</label>
                    <div className="h-10 bg-muted rounded-md animate-pulse"></div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Deductions</label>
                    <div className="h-10 bg-muted rounded-md animate-pulse"></div>
                  </div>
                </div>

                <div className="bg-primary/10 rounded-lg p-6 space-y-2">
                  <p className="text-sm text-muted-foreground">Estimated Tax</p>
                  <p className="text-3xl font-bold text-primary">₦234,500</p>
                  <p className="text-xs text-muted-foreground">Based on 2024 tax rates</p>
                </div>

                <Button className="w-full" size="lg">
                  Calculate Your Tax
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}