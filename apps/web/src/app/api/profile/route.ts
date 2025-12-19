import { NextResponse } from "next/server"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"
import { prisma } from "@/lib/db"

export async function GET() {
  const session = await getServerSession(authOptions)
  
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
  const session = await getServerSession(authOptions)
  
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