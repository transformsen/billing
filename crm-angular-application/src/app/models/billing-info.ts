export interface BillingNotes{
    modifiedDate: string
    description: string
    note: string
}

export interface Bills{
    invoiceNumber: string
    invoiceCreateDate: string
    billingPeriodBeginDate: string
    billingPeriodEndDate: string
    currentPaymentStatus: string
    totalBilledAmount: string
}

export interface Payments{
    createDate: string
    receivedDate: string
    paymentMethod: string
    checkNo: string
    amount: string
    memo: string
    reason: string
}

export interface CurrentBillingInfo{
    subgroupName: string
    subgroupId: string
    billingAddress: string
    billingFrequency: string
    statementType: string
}

export interface CurrentBillingStatus{
    suspendedBilling: string
    netAmountDue: string
    currentSuspense: string
    potentialLateFeeAmount: string
    eligibilityThroughDate: string
}

export interface BillingContact{
    name: string
    phone: string
}

export interface AdvancedPremimumTaxCredit{
    effectiveDate: string
    terminationDate: string
    amount: string
}

export interface DelinquencyCorrespondence{
    date: string
    description: string
    document: string
}

export interface DiscretionaryBillingItems{
    lastUpdate: string
    description: string
    amount: string
}

export interface PremimumPaid{
    year: string
    amount: string
}

export interface BillingInfo{
    currentBillinginfo: CurrentBillingInfo
    currentBillingStatus: CurrentBillingStatus
    premimumPaid: PremimumPaid[]
    billingNotes: BillingNotes[]
    bills: Bills[]
    payments: Payments[]    
    delinquencyCorrespondence: DelinquencyCorrespondence[]
    advancedPremimumTaxCredit: AdvancedPremimumTaxCredit[]
    discretionaryBillingItems: DiscretionaryBillingItems[]
}