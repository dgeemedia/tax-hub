// apps/web/src/types/next-auth.d.ts
import { DefaultSession } from "next-auth"

declare module "next-auth" {
  interface Session {
    user: {
      id: string
      userType: string
      firstName?: string
      lastName?: string
    } & DefaultSession["user"]
  }

  interface User {
    userType: string
    firstName?: string
    lastName?: string
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string
    userType: string
    firstName?: string
    lastName?: string
  }
}