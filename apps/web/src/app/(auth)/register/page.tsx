// apps/web/src/app/(auth)/register/page.tsx
import { RegisterForm } from "@/components/forms/RegisterForm"
import Link from "next/link"

export default function RegisterPage() {
  return (
    <div className="space-y-6">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold">Create Your Account</h1>
        <p className="text-muted-foreground">
          Get started with TaxHub NG today
        </p>
      </div>
      
      <RegisterForm />
      
      <p className="text-center text-sm text-muted-foreground">
        Already have an account?{" "}
        <Link href="/login" className="text-primary hover:underline font-medium">
          Sign in
        </Link>
      </p>
    </div>
  )
}