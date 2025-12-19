import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, X } from "lucide-react"

export function ComparisonSection() {
  return (
    <section id="comparison" className="py-20 px-4 bg-white">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Traditional Accounting Firms vs TaxHub NG
          </h2>
          <p className="text-xl text-muted-foreground">
            See why smart business owners are switching to our platform
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Traditional Firms */}
          <Card className="border-2">
            <CardHeader className="bg-gray-50">
              <CardTitle className="text-2xl">Traditional Accounting Firms</CardTitle>
              <p className="text-3xl font-bold text-red-600 pt-2">₦500k - ₦2M+</p>
              <p className="text-sm text-muted-foreground">Per financial year</p>
            </CardHeader>
            <CardContent className="pt-6">
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <X className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <span>Expensive retainer fees</span>
                </li>
                <li className="flex items-start gap-3">
                  <X className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <span>2-4 weeks turnaround time</span>
                </li>
                <li className="flex items-start gap-3">
                  <X className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <span>Manual processes, prone to delays</span>
                </li>
                <li className="flex items-start gap-3">
                  <X className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <span>Limited transparency in process</span>
                </li>
                <li className="flex items-start gap-3">
                  <X className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <span>Additional charges for revisions</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Professional certification</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>IFRS compliant</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* TaxHub NG */}
          <Card className="border-2 border-primary shadow-xl">
            <CardHeader className="bg-primary/5">
              <div className="flex items-center justify-between">
                <CardTitle className="text-2xl">TaxHub NG Platform</CardTitle>
                <span className="bg-green-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                  RECOMMENDED
                </span>
              </div>
              <p className="text-3xl font-bold text-primary pt-2">₦50k - ₦200k</p>
              <p className="text-sm text-green-600 font-medium">Save up to 70%!</p>
            </CardHeader>
            <CardContent className="pt-6">
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="font-medium">Transparent, affordable pricing</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="font-medium">3-7 days turnaround time</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="font-medium">AI-assisted automation + human review</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="font-medium">Real-time progress tracking</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="font-medium">Free revisions included</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="font-medium">ICAN/ACCA certified review</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="font-medium">IFRS compliant</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="font-medium">Integrated tax filing</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}