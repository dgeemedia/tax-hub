"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { formatCurrency } from "@/lib/utils"
import { Calculator, TrendingUp } from "lucide-react"

export function TaxCalculator() {
  const [grossIncome, setGrossIncome] = useState("")
  const [deductions, setDeductions] = useState("")
  const [result, setResult] = useState<any>(null)
  const [loading, setLoading] = useState(false)

  const calculateTax = async () => {
    setLoading(true)
    try {
      const response = await fetch("/api/tax/calculate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          grossIncome: parseFloat(grossIncome),
          deductions: parseFloat(deductions) || 0
        })
      })
      const data = await response.json()
      setResult(data)
    } catch (error) {
      console.error("Calculation failed:", error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calculator className="h-5 w-5" />
            Personal Income Tax Calculator
          </CardTitle>
          <CardDescription>
            Calculate your tax liability based on Nigerian tax laws
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">Gross Annual Income (₦)</label>
            <Input
              type="number"
              placeholder="Enter your annual income"
              value={grossIncome}
              onChange={(e) => setGrossIncome(e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Deductions (₦)</label>
            <Input
              type="number"
              placeholder="Pension, NHIS, etc."
              value={deductions}
              onChange={(e) => setDeductions(e.target.value)}
            />
          </div>

          <Button 
            onClick={calculateTax} 
            disabled={!grossIncome || loading}
            className="w-full"
          >
            {loading ? "Calculating..." : "Calculate Tax"}
          </Button>
        </CardContent>
      </Card>

      {result && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5" />
              Tax Calculation Results
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">Gross Income</p>
                <p className="text-2xl font-bold">{formatCurrency(result.grossIncome)}</p>
              </div>
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">Consolidated Relief</p>
                <p className="text-2xl font-bold">{formatCurrency(result.consolidatedRelief)}</p>
              </div>
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">Taxable Income</p>
                <p className="text-2xl font-bold">{formatCurrency(result.taxableIncome)}</p>
              </div>
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">Total Tax</p>
                <p className="text-2xl font-bold text-primary">{formatCurrency(result.tax)}</p>
              </div>
            </div>

            <div className="space-y-2 pt-4 border-t">
              <p className="text-sm font-medium">Tax Breakdown by Bracket:</p>
              {result.breakdown.map((bracket: any, idx: number) => (
                <div key={idx} className="flex justify-between text-sm">
                  <span className="text-muted-foreground">{bracket.bracket}</span>
                  <span className="font-medium">{formatCurrency(bracket.tax)}</span>
                </div>
              ))}
            </div>

            <div className="pt-4 border-t">
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Effective Tax Rate</span>
                <span className="text-lg font-bold">{result.effectiveRate.toFixed(2)}%</span>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}