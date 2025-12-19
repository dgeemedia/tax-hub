export const PERSONAL_TAX_BRACKETS_2024 = [
  { min: 0, max: 300000, rate: 0.07 },
  { min: 300000, max: 600000, rate: 0.11 },
  { min: 600000, max: 1100000, rate: 0.15 },
  { min: 1100000, max: 1600000, rate: 0.19 },
  { min: 1600000, max: 3200000, rate: 0.21 },
  { min: 3200000, max: Infinity, rate: 0.24 }
];

export const MIN_CONSOLIDATED_RELIEF = 200000;
export const CONSOLIDATED_RELIEF_RATE = 0.01;

export interface TaxCalculationResult {
  grossIncome: number;
  consolidatedRelief: number;
  taxableIncome: number;
  tax: number;
  effectiveRate: number;
  breakdown: Array<{
    bracket: string;
    amount: number;
    rate: number;
    tax: number;
  }>;
}

export function calculatePersonalIncomeTax(
  grossIncome: number,
  deductions: number = 0
): TaxCalculationResult {
  const consolidatedRelief = Math.max(
    grossIncome * CONSOLIDATED_RELIEF_RATE,
    MIN_CONSOLIDATED_RELIEF
  );
  
  const taxableIncome = Math.max(0, grossIncome - deductions - consolidatedRelief);
  
  let tax = 0;
  let remainingIncome = taxableIncome;
  const breakdown = [];
  
  for (const bracket of PERSONAL_TAX_BRACKETS_2024) {
    if (remainingIncome <= 0) break;
    
    const bracketSize = bracket.max - bracket.min;
    const taxableInBracket = Math.min(remainingIncome, bracketSize);
    const bracketTax = taxableInBracket * bracket.rate;
    
    tax += bracketTax;
    
    breakdown.push({
      bracket: `₦${bracket.min.toLocaleString()} - ₦${bracket.max === Infinity ? '∞' : bracket.max.toLocaleString()}`,
      amount: taxableInBracket,
      rate: bracket.rate,
      tax: bracketTax
    });
    
    remainingIncome -= taxableInBracket;
  }
  
  return {
    grossIncome,
    consolidatedRelief,
    taxableIncome,
    tax: Math.round(tax * 100) / 100,
    effectiveRate: grossIncome > 0 ? (tax / grossIncome) * 100 : 0,
    breakdown
  };
}