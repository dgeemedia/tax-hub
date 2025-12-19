import { FinancialUpload } from "@/components/corporate/FinancialUpload"

export default function FinancialUploadPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Financial Statement Analysis</h1>
        <p className="text-muted-foreground">
          Upload your financial statements for AI-powered tax analysis
        </p>
      </div>

      <FinancialUpload />
    </div>
  )
}