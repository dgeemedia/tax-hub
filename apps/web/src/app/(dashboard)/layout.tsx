// apps/web/src/app/(dashboard)/layout.tsx
import { auth } from "@/lib/auth"  // Changed
import { redirect } from "next/navigation"
import { MobileDashboard } from "@/components/layout/MobileDashboard"

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await auth()  // Changed

  if (!session) {
    redirect("/login")
  }

  return (
    <div className="min-h-screen">
      <MobileDashboard session={session}>
        {children}
      </MobileDashboard>
    </div>
  )
}