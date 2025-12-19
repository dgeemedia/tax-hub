import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { formatCurrency } from "@/lib/utils"

interface TaxAnalysisDisplayProps {
  analysis: {
    revenue: number
    expenses: number
    profit: number
    corporateTax: number
    totalTaxLiability: number
    taxRate: number
    recommendations?: string[]
  }
}

export function TaxAnalysisDisplay({ analysis }: TaxAnalysisDisplayProps) {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Financial Summary</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-3 gap-4">
            <div>
              <p className="text-sm text-muted-foreground">Revenue</p>
              <p className="text-2xl font-bold">{formatCurrency(analysis.revenue)}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Expenses</p>
              <p className="text-2xl font-bold">{formatCurrency(analysis.expenses)}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Profit</p>
              <p className="text-2xl font-bold text-green-600">{formatCurrency(analysis.profit)}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Tax Liability</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex justify-between">
              <span>Corporate Tax ({(analysis.taxRate * 100).toFixed(0)}%)</span>
              <span className="font-bold">{formatCurrency(analysis.corporateTax)}</span>
            </div>
            <div className="flex justify-between text-lg font-bold border-t pt-4">
              <span>Total Tax Liability</span>
              <span className="text-primary">{formatCurrency(analysis.totalTaxLiability)}</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {analysis.recommendations && analysis.recommendations.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle>Recommendations</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {analysis.recommendations.map((rec, idx) => (
                <li key={idx} className="text-sm">{rec}</li>
              ))}
            </ul>
          </CardContent>
        </Card>
      )}
    </div>
  )
}