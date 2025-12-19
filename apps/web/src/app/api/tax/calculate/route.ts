import { NextResponse } from "next/server"
import { calculatePersonalIncomeTax } from "tax-engine"

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { grossIncome, deductions = 0 } = body

    if (!grossIncome || grossIncome < 0) {
      return NextResponse.json(
        { error: "Invalid income amount" },
        { status: 400 }
      )
    }

    const result = calculatePersonalIncomeTax(grossIncome, deductions)

    return NextResponse.json(result)
  } catch (error) {
    return NextResponse.json(
      { error: "Calculation failed" },
      { status: 500 }
    )
  }
}