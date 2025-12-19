// apps/web/src/app/(dashboard)/layout.tsx
import { auth } from "@/lib/auth"  // Changed
import { redirect } from "next/navigation"
import { Sidebar } from "@/components/layout/Sidebar"

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
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 p-8 lg:ml-64 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          {children}
        </div>
      </main>
    </div>
  )
}