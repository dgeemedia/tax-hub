import { NextResponse } from "next/server"
import { auth } from "@/lib/auth"  

export async function POST(req: Request) {
  try {
    const session = await auth() 
    
    if (!session?.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    return NextResponse.json({ 
      message: "Upload endpoint - use /api/corporate/analyze for full functionality" 
    })
  } catch (error) {
    return NextResponse.json(
      { error: "Upload failed" },
      { status: 500 }
    )
  }
}