import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { FileText } from "lucide-react"

export default function FileTaxPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">File Tax Return</h1>
        <p className="text-muted-foreground">
          Submit your annual tax return to FIRS
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileText className="h-5 w-5" />
            Tax Return Filing
          </CardTitle>
          <CardDescription>
            Complete the form below to file your tax return
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Tax Year</Label>
                <Input type="number" placeholder="2024" />
              </div>
              <div className="space-y-2">
                <Label>Filing Status</Label>
                <Input placeholder="Individual" />
              </div>
            </div>

            <div className="space-y-2">
              <Label>Gross Income (₦)</Label>
              <Input type="number" placeholder="5000000" />
            </div>

            <div className="space-y-2">
              <Label>Total Deductions (₦)</Label>
              <Input type="number" placeholder="500000" />
            </div>

            <div className="space-y-2">
              <Label>Tax Paid (₦)</Label>
              <Input type="number" placeholder="450000" />
            </div>
          </div>

          <div className="flex gap-4">
            <Button className="flex-1">Submit Tax Return</Button>
            <Button variant="outline">Save as Draft</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}