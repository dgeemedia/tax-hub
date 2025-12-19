import { TaxCalculator } from "@/components/calculator/TaxCalculator"

export default function TaxCalculatorPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Tax Calculator</h1>
        <p className="text-muted-foreground">
          Calculate your personal income tax based on Nigerian tax laws
        </p>
      </div>

      <TaxCalculator />
    </div>
  )
}