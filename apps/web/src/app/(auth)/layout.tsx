import { Calculator } from "lucide-react"
import Link from "next/link"

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen grid lg:grid-cols-2">
      {/* Left Side - Branding */}
      <div className="hidden lg:flex flex-col justify-center bg-gradient-to-br from-primary via-green-600 to-green-800 p-12 text-white">
        <Link href="/" className="flex items-center gap-2 mb-12">
          <Calculator className="h-8 w-8" />
          <span className="font-bold text-2xl">TaxHub NG</span>
        </Link>
        
        <div className="max-w-md space-y-6">
          <h1 className="text-5xl font-bold leading-tight">
            Your Tax Partner in Nigeria
          </h1>
          <p className="text-xl opacity-90">
            Join thousands of Nigerians simplifying their tax compliance with intelligent automation and expert guidance.
          </p>
          
          <div className="space-y-4 pt-8">
            <div className="flex items-start gap-3">
              <div className="bg-white/20 rounded-full p-2 mt-1">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-lg">Instant Tax Calculations</h3>
                <p className="opacity-80">Get accurate results in seconds</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="bg-white/20 rounded-full p-2 mt-1">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-lg">AI-Powered Analysis</h3>
                <p className="opacity-80">Smart document processing for corporates</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="bg-white/20 rounded-full p-2 mt-1">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-lg">100% Compliant</h3>
                <p className="opacity-80">Stay aligned with FIRS regulations</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          {children}
        </div>
      </div>
    </div>
  )
}