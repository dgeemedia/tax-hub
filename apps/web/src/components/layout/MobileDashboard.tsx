// apps/web/src/components/layout/MobileDashboard.tsx
"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { signOut } from "next-auth/react"
import { Button } from "@/components/ui/button"
import { 
  Calculator, 
  LayoutDashboard, 
  User, 
  FileText, 
  Upload, 
  CreditCard,
  LogOut,
  Menu,
  X,
  FileCheck
} from "lucide-react"
import { cn } from "@/lib/utils"

const menuItems = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard
  },
  {
    title: "Profile",
    href: "/profile",
    icon: User
  },
  {
    title: "Tax Calculator",
    href: "/tax-calculator",
    icon: Calculator
  },
  {
    title: "File Tax",
    href: "/file-tax",
    icon: FileText
  },
  {
    title: "Financial Statements",
    href: "/financial-statements-orders",
    icon: FileCheck,
    badge: "NEW"
  },
  {
    title: "Documents",
    href: "/documents",
    icon: Upload
  },
  {
    title: "Payments",
    href: "/payments",
    icon: CreditCard
  }
]

export function MobileDashboard({ 
  children,
  session 
}: { 
  children: React.ReactNode
  session: any
}) {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile Header */}
      <header className="lg:hidden fixed top-0 left-0 right-0 h-16 bg-white border-b z-50 px-4 flex items-center justify-between">
        <Link href="/dashboard" className="flex items-center gap-2">
          <Calculator className="h-6 w-6 text-primary" />
          <span className="font-bold text-xl">TaxHub NG</span>
        </Link>
        
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 hover:bg-gray-100 rounded-lg"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </header>

      {/* Desktop Sidebar */}
      <aside className="hidden lg:block fixed left-0 top-0 h-screen w-64 border-r bg-white p-6">
        <div className="mb-8">
          <Link href="/dashboard" className="flex items-center gap-2">
            <Calculator className="h-6 w-6 text-primary" />
            <span className="font-bold text-xl">TaxHub NG</span>
          </Link>
        </div>

        <nav className="space-y-2 flex-1">
          {menuItems.map((item) => {
            const Icon = item.icon
            const isActive = pathname === item.href
            
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center gap-3 px-4 py-3 rounded-lg transition-colors",
                  isActive 
                    ? "bg-primary text-white" 
                    : "hover:bg-gray-100 text-gray-700"
                )}
              >
                <Icon className="h-5 w-5" />
                <span className="font-medium flex-1">{item.title}</span>
                {item.badge && (
                  <span className="text-xs bg-yellow-400 text-black px-2 py-0.5 rounded-full font-bold">
                    {item.badge}
                  </span>
                )}
              </Link>
            )
          })}
        </nav>

        <div className="pt-4 border-t mt-auto">
          <Button
            variant="ghost"
            className="w-full justify-start text-red-600 hover:text-red-700 hover:bg-red-50"
            onClick={() => signOut({ callbackUrl: "/" })}
          >
            <LogOut className="h-5 w-5 mr-3" />
            Sign Out
          </Button>
        </div>
      </aside>

      {/* Mobile Sidebar Overlay */}
      {isOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black/50 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Mobile Sidebar */}
      <aside className={cn(
        "lg:hidden fixed top-0 left-0 h-screen w-72 bg-white z-50 transform transition-transform duration-300 ease-in-out",
        isOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        <div className="p-6">
          <div className="flex items-center justify-between mb-8">
            <Link href="/dashboard" className="flex items-center gap-2">
              <Calculator className="h-6 w-6 text-primary" />
              <span className="font-bold text-xl">TaxHub NG</span>
            </Link>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 hover:bg-gray-100 rounded-lg"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* User Info */}
          <div className="mb-6 p-4 bg-gray-50 rounded-lg">
            <p className="font-semibold">{session?.user?.name || session?.user?.email}</p>
            <p className="text-sm text-muted-foreground">{session?.user?.email}</p>
          </div>

          <nav className="space-y-2">
            {menuItems.map((item) => {
              const Icon = item.icon
              const isActive = pathname === item.href
              
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "flex items-center gap-3 px-4 py-3 rounded-lg transition-colors",
                    isActive 
                      ? "bg-primary text-white" 
                      : "hover:bg-gray-100 text-gray-700"
                  )}
                >
                  <Icon className="h-5 w-5" />
                  <span className="font-medium flex-1">{item.title}</span>
                  {item.badge && (
                    <span className="text-xs bg-yellow-400 text-black px-2 py-0.5 rounded-full font-bold">
                      {item.badge}
                    </span>
                  )}
                </Link>
              )
            })}
          </nav>

          <div className="pt-4 border-t mt-6">
            <Button
              variant="ghost"
              className="w-full justify-start text-red-600 hover:text-red-700 hover:bg-red-50"
              onClick={() => {
                setIsOpen(false)
                signOut({ callbackUrl: "/" })
              }}
            >
              <LogOut className="h-5 w-5 mr-3" />
              Sign Out
            </Button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="lg:ml-64 pt-16 lg:pt-0 min-h-screen">
        <div className="p-4 lg:p-8 max-w-7xl mx-auto">
          {children}
        </div>
      </main>
    </div>
  )
}