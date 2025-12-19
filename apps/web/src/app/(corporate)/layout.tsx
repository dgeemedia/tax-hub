// apps/web/src/app/(corporate)/layout.tsx
import { auth } from "@/lib/auth"  // Changed from getServerSession
import { redirect } from "next/navigation"
import { Sidebar } from "@/components/layout/Sidebar"
import { Suspense } from "react"
import { Loader2 } from "lucide-react"

export default async function CorporateLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await auth()  // Changed from getServerSession(authOptions)

  if (!session) {
    redirect("/login")
  }

  // Check if user is corporate
  // Note: Type assertion might be needed due to Auth.js v5 types
  const user = session.user as any
  
  if (user?.userType !== "CORPORATE") {
    redirect("/dashboard")
  }

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 p-8 lg:ml-64 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <Suspense fallback={
            <div className="flex items-center justify-center h-64">
              <Loader2 className="h-6 w-6 animate-spin" />
            </div>
          }>
            {children}
          </Suspense>
        </div>
      </main>
    </div>
  )
}