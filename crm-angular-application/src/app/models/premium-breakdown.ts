export interface Premiums{
    premium: string
    medical: string
    dental: string
    vision: string
    contraceptive: string
    service: string
}

export interface RateDetails{
    name: string
    role: string
    rateArea: string
    tobaccoStatus: string
    premiums: Premiums
}

export interface RateSummary{
    eligibility: string
    product: string
    marketSegment: string
    totalPremium: string
    details: RateDetails[]
}

export interface PremiumBreakDown{
    featureRate: RateSummary
    currentRate: RateSummary
    previousRate: RateSummary[]
}
