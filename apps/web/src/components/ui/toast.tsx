"use client"

import { cn } from "@/lib/utils"

export function Toast({ title, description, variant = "default" }: {
  title: string
  description?: string
  variant?: "default" | "destructive"
}) {
  return (
    <div className={cn(
      "rounded-lg border p-4 shadow-lg",
      variant === "destructive" ? "bg-red-50 border-red-200" : "bg-white"
    )}>
      <p className="font-semibold">{title}</p>
      {description && <p className="text-sm text-muted-foreground">{description}</p>}
    </div>
  )
}

// toaster.tsx
export function Toaster() {
  return null // Placeholder
}