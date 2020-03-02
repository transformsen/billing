import { BillingNotes, Bills, Payments, CurrentBillingInfo, CurrentBillingStatus, BillingContact } from './billing-info';

export interface BillingSubgroup{
    billingNotes: BillingNotes[]
    bills: Bills[]
    payments: Payments[]
    currentBillinginfo: CurrentBillingInfo
    currentBillingStatus: CurrentBillingStatus
    billingContact: BillingContact
}