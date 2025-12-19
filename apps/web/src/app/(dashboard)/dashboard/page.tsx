// apps/web/src/app/(dashboard)/dashboard/page.tsx
import { auth } from "@/lib/auth"  // Changed from getServerSession
import { redirect } from "next/navigation"
import { prisma } from "@/lib/db"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { formatCurrency } from "@/lib/utils"
import { FileText, Calculator, CreditCard, CheckCircle } from "lucide-react"

export default async function DashboardPage() {
  const session = await auth()  // Changed from getServerSession(authOptions)
  
  if (!session) {
    redirect("/login")
  }

  const user = await prisma.user.findUnique({
    where: { id: session.user.id },  // TypeScript knows about user.id from auth() return type
    include: {
      taxReturns: {
        orderBy: { createdAt: 'desc' },
        take: 5
      },
      payments: {
        where: { status: 'COMPLETED' },
        orderBy: { createdAt: 'desc' },
        take: 5
      }
    }
  })

  const stats = {
    totalFilings: user?.taxReturns.length || 0,
    pendingFilings: user?.taxReturns.filter(t => t.status === 'DRAFT').length || 0,
    totalPaid: user?.payments.reduce((sum, p) => sum + p.amount, 0) || 0
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Welcome back, {user?.firstName}!</h1>
        <p className="text-muted-foreground">Manage your tax obligations and stay compliant</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Filings</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.totalFilings}</div>
            <p className="text-xs text-muted-foreground">All time</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending Filings</CardTitle>
            <Calculator className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.pendingFilings}</div>
            <p className="text-xs text-muted-foreground">Requires action</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Paid</CardTitle>
            <CreditCard className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{formatCurrency(stats.totalPaid)}</div>
            <p className="text-xs text-muted-foreground">All payments</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Compliance Status</CardTitle>
            <CheckCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">Active</div>
            <p className="text-xs text-muted-foreground">Up to date</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Recent Tax Returns</CardTitle>
            <CardDescription>Your latest tax filings</CardDescription>
          </CardHeader>
          <CardContent>
            {user?.taxReturns.length === 0 ? (
              <p className="text-sm text-muted-foreground">No tax returns filed yet</p>
            ) : (
              <div className="space-y-4">
                {user?.taxReturns.map((taxReturn) => (
                  <div key={taxReturn.id} className="flex justify-between items-center">
                    <div>
                      <p className="font-medium">{taxReturn.taxYear} Tax Return</p>
                      <p className="text-sm text-muted-foreground">{taxReturn.status}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">{formatCurrency(taxReturn.taxAmount)}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recent Payments</CardTitle>
            <CardDescription>Your payment history</CardDescription>
          </CardHeader>
          <CardContent>
            {user?.payments.length === 0 ? (
              <p className="text-sm text-muted-foreground">No payments made yet</p>
            ) : (
              <div className="space-y-4">
                {user?.payments.map((payment) => (
                  <div key={payment.id} className="flex justify-between items-center">
                    <div>
                      <p className="font-medium">{payment.purpose}</p>
                      <p className="text-sm text-muted-foreground">
                        {new Date(payment.createdAt).toLocaleDateString()}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">{formatCurrency(payment.amount)}</p>
                      <p className="text-xs text-green-600">{payment.status}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}