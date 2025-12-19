"use client"

import { useState, useCallback } from "react"
import { useDropzone } from "react-dropzone"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Upload, FileText, Loader2 } from "lucide-react"
import { formatCurrency } from "@/lib/utils"

export function FinancialUpload() {
  const [uploading, setUploading] = useState(false)
  const [analysis, setAnalysis] = useState<any>(null)

  const onDrop = useCallback(async (acceptedFiles: File[]) => {
    const file = acceptedFiles[0]
    if (!file) return

    setUploading(true)
    const formData = new FormData()
    formData.append("file", file)

    try {
      const response = await fetch("/api/corporate/analyze", {
        method: "POST",
        body: formData
      })
      const data = await response.json()
      setAnalysis(data)
    } catch (error) {
      console.error("Upload failed:", error)
    } finally {
      setUploading(false)
    }
  }, [])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'application/pdf': ['.pdf'],
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': ['.xlsx'],
      'application/vnd.ms-excel': ['.xls'],
      'image/*': ['.png', '.jpg', '.jpeg']
    },
    maxFiles: 1
  })

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Upload Financial Statement</CardTitle>
          <CardDescription>
            Upload your company's financial statement for automated tax analysis
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div
            {...getRootProps()}
            className={`border-2 border-dashed rounded-lg p-12 text-center cursor-pointer transition-colors ${
              isDragActive ? "border-primary bg-primary/5" : "border-muted-foreground/25"
            }`}
          >
            <input {...getInputProps()} />
            <Upload className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
            {uploading ? (
              <div className="flex items-center justify-center gap-2">
                <Loader2 className="h-4 w-4 animate-spin" />
                <p>Analyzing document...</p>
              </div>
            ) : (
              <>
                <p className="text-lg font-medium mb-2">
                  {isDragActive ? "Drop file here" : "Drag & drop or click to upload"}
                </p>
                <p className="text-sm text-muted-foreground">
                  Supports PDF, Excel (.xlsx, .xls), and Images
                </p>
              </>
            )}
          </div>
        </CardContent>
      </Card>

      {analysis && (
        <>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5" />
                Extracted Financial Data
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">Revenue</p>
                  <p className="text-xl font-bold">{formatCurrency(analysis.extractedData.revenue)}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">Expenses</p>
                  <p className="text-xl font-bold">{formatCurrency(analysis.extractedData.expenses)}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">Profit</p>
                  <p className="text-xl font-bold text-green-600">{formatCurrency(analysis.extractedData.profit)}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">Assets</p>
                  <p className="text-xl font-bold">{formatCurrency(analysis.extractedData.assets)}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">Liabilities</p>
                  <p className="text-xl font-bold">{formatCurrency(analysis.extractedData.liabilities)}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Tax Analysis</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">Corporate Tax</p>
                  <p className="text-2xl font-bold">{formatCurrency(analysis.taxAnalysis.corporateTax)}</p>
                  <p className="text-xs text-muted-foreground">
                    {(analysis.taxAnalysis.taxRate * 100).toFixed(0)}% tax rate
                    {analysis.taxAnalysis.isSmallCompany && " (Small company)"}
                  </p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">VAT (7.5%)</p>
                  <p className="text-2xl font-bold">{formatCurrency(analysis.taxAnalysis.vat)}</p>
                </div>
              </div>

              <div className="pt-4 border-t">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-medium">Total Tax Liability</span>
                  <span className="text-3xl font-bold text-primary">
                    {formatCurrency(analysis.taxAnalysis.totalTaxLiability)}
                  </span>
                </div>
              </div>

              {analysis.recommendations && (
                <div className="pt-4 border-t space-y-2">
                  <p className="font-medium">AI Recommendations:</p>
                  <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                    {analysis.recommendations.map((rec: string, idx: number) => (
                      <li key={idx}>{rec}</li>
                    ))}
                  </ul>
                </div>
              )}
            </CardContent>
          </Card>
        </>
      )}
    </div>
  )
}