// packages/tax-engine/src/corporate-tax.ts
export const CORPORATE_TAX_RATE = 0.30;
export const SMALL_COMPANY_TAX_RATE = 0.20;
export const SMALL_COMPANY_THRESHOLD = 25000000;
export const VAT_RATE = 0.075;

export interface CorporateTaxResult {
  revenue: number;
  expenses: number;
  profit: number;
  taxableProfit: number;
  corporateTax: number;
  vat: number;
  totalTaxLiability: number;
  taxRate: number;
  isSmallCompany: boolean;
}

export function calculateCorporateTax(
  revenue: number,
  expenses: number,
  taxableAdjustments: number = 0
): CorporateTaxResult {
  const profit = revenue - expenses;
  const taxableProfit = Math.max(0, profit + taxableAdjustments);
  const isSmallCompany = revenue < SMALL_COMPANY_THRESHOLD;
  const taxRate = isSmallCompany ? SMALL_COMPANY_TAX_RATE : CORPORATE_TAX_RATE;
  
  const corporateTax = taxableProfit * taxRate;
  const vat = revenue * VAT_RATE;
  const totalTaxLiability = corporateTax + vat;
  
  return {
    revenue,
    expenses,
    profit,
    taxableProfit,
    corporateTax: Math.round(corporateTax * 100) / 100,
    vat: Math.round(vat * 100) / 100,
    totalTaxLiability: Math.round(totalTaxLiability * 100) / 100,
    taxRate,
    isSmallCompany
  };
}