import "next-auth"
import { JWT } from "next-auth/jwt"

declare module "next-auth" {
  interface User {
    id: string
    email: string
    name?: string | null
    userType?: string
    firstName?: string | null
    lastName?: string | null
  }

  interface Session {
    user: {
      id: string
      email: string
      name?: string | null
      userType?: string
      firstName?: string | null
      lastName?: string | null
    } & DefaultSession["user"]
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string
    email: string
    userType?: string
    firstName?: string | null
    lastName?: string | null
  }
}