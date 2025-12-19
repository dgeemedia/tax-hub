import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { TrendingUp } from "lucide-react"

export default function TaxAnalysisPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Tax Analysis</h1>
        <p className="text-muted-foreground">
          View AI-powered analysis of your financial statements
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5" />
            Analysis History
          </CardTitle>
          <CardDescription>
            Your completed tax analyses
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-center py-12 text-muted-foreground">
            <TrendingUp className="h-12 w-12 mx-auto mb-4 opacity-50" />
            <p>No analyses yet</p>
            <p className="text-sm">Upload a financial statement to get started</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}