export interface User {
  id: string
  email: string
  firstName?: string
  lastName?: string
  userType: 'INDIVIDUAL' | 'CORPORATE'
}

export interface TaxCalculation {
  grossIncome: number
  taxableIncome: number
  tax: number
  effectiveRate: number
}