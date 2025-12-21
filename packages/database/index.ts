// packages/database/index.ts
import { PrismaClient, Prisma } from "@prisma/client"

// Create a singleton instance
const prisma = new PrismaClient()

export { prisma, Prisma, PrismaClient }
export * from "@prisma/client"