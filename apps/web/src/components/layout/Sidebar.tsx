"use client"

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
  Building2
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

const corporateMenuItems = [
  {
    title: "Corporate Dashboard",
    href: "/corporate-dashboard",
    icon: Building2
  },
  {
    title: "Financial Upload",
    href: "/financial-upload",
    icon: Upload
  },
  {
    title: "Tax Analysis",
    href: "/tax-analysis",
    icon: FileText
  }
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className="fixed left-0 top-0 h-screen w-64 border-r bg-white p-6 flex flex-col">
      <div className="mb-8">
        <Link href="/dashboard" className="flex items-center gap-2">
          <Calculator className="h-6 w-6 text-primary" />
          <span className="font-bold text-xl">TaxHub NG</span>
        </Link>
      </div>

      <nav className="flex-1 space-y-2">
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
              <span className="font-medium">{item.title}</span>
            </Link>
          )
        })}
      </nav>

      <div className="pt-4 border-t">
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
  )
}