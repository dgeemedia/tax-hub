// apps/web/src/app/api/profile/route.ts
import { NextResponse } from "next/server"
import { auth } from "@/lib/auth"  // Changed
import { prisma } from "@/lib/db"

export async function GET() {
  const session = await auth()  // Changed
  
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  const user = await prisma.user.findUnique({
    where: { id: session.user.id },
    include: {
      profile: true,
      corporateProfile: true
    }
  })

  return NextResponse.json({ user })
}

export async function PUT(req: Request) {
  const session = await auth()  // Changed
  
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  const body = await req.json()
  const { nin, tin, ...profileData } = body

  const user = await prisma.user.update({
    where: { id: session.user.id },
    data: {
      nin,
      tin,
      profile: {
        upsert: {
          create: profileData,
          update: profileData
        }
      }
    },
    include: {
      profile: true
    }
  })

  return NextResponse.json({ user })
}