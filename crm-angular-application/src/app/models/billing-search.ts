export interface BillingIndividual{
    policyId: string
    policyholder: string
    policyType: number
    groupName: string
    dob: string
    effectiveDate: string
    terminationDate: string
}

export interface BillingGroup{
    groupId: string
    subgroupId: string
    groupName: string
    billingFrequency: number
    subgroupName: string
    effectiveDate: string
    terminationDate: string
}