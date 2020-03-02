import { Observable, of } from 'rxjs';
import { BillingSubgroup } from '../models/billing-subgroup';
import { BillingGroup, BillingIndividual } from '../models/billing-search';
import { BillingInfo, BillingNotes, AdvancedPremimumTaxCredit, PremimumPaid, DiscretionaryBillingItems, Bills } from '../models/billing-info';
import { PremiumBreakDown } from '../models/premium-breakdown';
import { randomDate, pickOne, randomRange } from '../util/mock.util';
import { delay } from 'rxjs/operators';



export class BillingServiceMock {
  

  getBillingIndividual(ssn: string, policyId: string) : Observable<BillingIndividual> {
    const rows = [];
    for (let i = 0; i < 8; i++) {
        rows.push({
          policyId: 'W'+i+'0000',
          policyholder: pickOne(['Hong Chiao', 'Sao Tome']),
          policyType: randomRange(1000, 9999),
          groupName: pickOne(['Glen Stevenson', 'Roy Chapman']),
          dob: randomDate(),
          effectiveDate: randomDate(),
          terminationDate: randomDate(),
        } as BillingIndividual);
      }
      const filteredRows = groupFilter(rows, 'policyId', policyId)
      return of(filteredRows).pipe(delay(1000))
  }

  getBillingGroup(groupName: string, groupId: string, subGroupId: string): Observable<BillingGroup> {
    const rows = [];
    for (let i = 0; i < 8; i++) {
        rows.push({
          groupId: i+'000000',
          subgroupId: i+'000000',
          groupName:(i%2==0)? 'Hong Chiao' : 'Sao Tome',
          billingFrequency: randomRange(1000, 9999),
          subgroupName: pickOne(['Glen Stevenson', 'Roy Chapman']),
          effectiveDate: randomDate(),
          terminationDate: randomDate(),
        } as BillingGroup);
      }
    const filteredByGroupId= groupFilter(rows, 'groupId', groupId)
    const filteredSubGroup = groupFilter(filteredByGroupId, 'subgroupId', subGroupId)
    const filteredRow = groupFilter(filteredSubGroup, 'groupName', groupName)
    return of(filteredRow).pipe(delay(1000))    
 }

  getBillingSubGroup(subgroupId: any): Observable<BillingSubgroup> {
    const subgrop:BillingSubgroup = {
        billingNotes: createBillingNotesRows(),
        bills: createBillsRows(),
        payments: createPaymentsRows(),
        currentBillinginfo:{
            subgroupName: 'Roy Chapman',
            subgroupId: 'W00000',
            billingAddress: '4000 East B, Des Moines Iowa, 50309',
            billingFrequency: 'Monthly',
            statementType: 'Electronic Group List by Last'
        },
        currentBillingStatus:{
            suspendedBilling: 'Bill as Normal',
            netAmountDue: '$1,000.00',
            currentSuspense: '$0.00',
            potentialLateFeeAmount: '12/31/2019',
            eligibilityThroughDate: '12/31/2019'
        },
        billingContact:{
            name: 'Tim Berg',
            phone: '(123) 456-7979'
        }

    }   
    return of(subgrop).pipe(delay(1000))    

 }

  getBillingInfo(policyId: any): Observable<BillingInfo> {
    const subgrop: BillingInfo = {
        billingNotes: createBillingNotesRows(),
        bills: createBillsRows(),
        payments: createPaymentsRows(),
        currentBillinginfo:{
            subgroupName: 'Roy Chapman',
            subgroupId: 'W00000',
            billingAddress: '4000 East B, Des Moines Iowa, 50309',
            billingFrequency: 'Monthly',
            statementType: 'Electronic Group List by Last'
        },
        currentBillingStatus:{
            suspendedBilling: 'Bill as Normal',
            netAmountDue: '$1,000.00',
            currentSuspense: '$0.00',
            potentialLateFeeAmount: '12/31/2019',
            eligibilityThroughDate: '12/31/2019'
        },
        delinquencyCorrespondence: createDelinquencyCorrespondence(),
        discretionaryBillingItems: getDiscretionaryBillingItems(),
        advancedPremimumTaxCredit: getAdvancedPremimumTaxCredit(),
        premimumPaid: getPremimumPaid()

    }
    return of(subgrop).pipe(delay(1000))    
}

  getPremiumBreakdown(policyId: string): Observable<PremiumBreakDown> {
    const premiumBreakdown :PremiumBreakDown = {
        featureRate: createRate(),
        currentRate: createRate(),
        previousRate: createRates(10)
    }
    return of(premiumBreakdown).pipe(delay(1000))
}
  

}


export function groupFilter(rows, filterById, filterByValue){
    return rows.filter((item)=>{
        if(!filterByValue || filterByValue==''){
          return true
        }else{
          return item[filterById].toUpperCase().includes(filterByValue.toUpperCase())
        }
    })
}

export function createDelinquencyCorrespondence() {
    const billingNotesRows = []
    for (let i = 0; i < 30; i++) {
      billingNotesRows.push({
        date: randomDate(),
        description: 'Deduct Payment',
        document: 'Docuemnt'+1
    })
    return billingNotesRows;
}
}


export function getDiscretionaryBillingItems() {
    const billingNotesRows: DiscretionaryBillingItems[] = []
    for (let i = 0; i < 30; i++) {
        billingNotesRows.push({
        lastUpdate: randomDate(),
        description: 'Deduct Payment',
        amount: '$1000.00'
        })
    }
    return billingNotesRows;
}

export function getAdvancedPremimumTaxCredit() {
    const billingNotesRows: AdvancedPremimumTaxCredit[] = []
    for (let i = 0; i < 30; i++) {
        billingNotesRows.push({
            effectiveDate : randomDate(),
            terminationDate: randomDate(),
        amount: '$1000.00'
        })
    }
    return billingNotesRows;
}

export function getPremimumPaid(){
    const billingNotesRows: PremimumPaid[] = []
    for (let i = 0; i < 5; i++) {
        billingNotesRows.push({
            year : '201'+i,
            amount: '$1000.00'
        })
    }
    return billingNotesRows;
}

export function createBillingNotesRows() {
    const billingNotesRows : BillingNotes[] = []
    for (let i = 0; i < 30; i++) {
      billingNotesRows.push({
        modifiedDate: randomDate(),
        description: 'Deduct Payment',
        note: pickOne([
          // tslint:disable-next-line:max-line-length
          'Eum illum minima incidunt. Est sint magni ex. Nulla in dolor quod quo ddistinctio sint modi est. Dolores non sit non magni est ewdyg ratione iste iste. Non velit exercitdationem amet minus. Doloremque et consectetur repudia ndae maiores quos atque vero ipsa quia',
          'Est harum velit deleniti.',
          'Amet vitae maxime omnis voluptatem.',
          'Voluptas voluptatem porro iusto omnis nobis et.',
        ]),
      });
    }
    return billingNotesRows;
  }

  export function createBillsRows() {
      const billsRows: Bills[] = []
    for (let i = 0; i < 30; i++) {
      billsRows.push({
        invoiceNumber: '123456789',
        invoiceCreateDate: randomDate(),
        billingPeriodBeginDate: randomDate(),
        billingPeriodEndDate: randomDate(),
        currentPaymentStatus: 'Paid in Full',
        totalBilledAmount: '$1,000.00',
      });
    }
    return billsRows;
  }

 export function createPaymentsRows() {
    const paymentsRows = []
    for (let i = 0; i < 30; i++) {
      paymentsRows.push({
        createDate: randomDate(),
        receivedDate: randomDate(),
        paymentMethod: pickOne(['Check', 'Refund']),
        checkNo: randomRange(100000000, 999999999),
        amount: randomRange(0, 9999999) - randomRange(0, 9999999),
        memo: pickOne([
          // tslint:disable-next-line:max-line-length
          'Amet vitae maxime omnis voluptatem. Amet vitae dmefg oaeiugf seiyg fsiheg fiseg fils. Amet vitae dmefg oaeiugf seiyg fsiheg fiseg fils. Amet vitae dmefg oaeiugf seiyg fsiheg fiseg fils',
          'Lorem',
        ]),
        reason: pickOne([
          // tslint:disable-next-line:max-line-length
          'Amet vitae maxime omnis voluptatem. Amet vitae dmefg oaeiugf seiyg fsiheg fiseg fils. Amet vitae dmefg oaeiugf seiyg fsiheg fiseg fils. Amet vitae dmefg oaeiugf seiyg fsiheg fiseg fils',
          'Lorem',
        ]),
      });
    }
    return paymentsRows;
  }


 export function createRowItem() {
    return {
      name: pickOne([
        'John James Wilkes',
        'Marry Ann Wilkes',
        'Jo Wilkes',
        'Bob Ann Wilkes',
      ]),
      role: pickOne([
        'Policyholder',
        'Spouse',
        'Dependent',
      ]),
      rateArea: 'NDHD',
      tobaccoStatus: 'NOT APPLICABLE',
      premiums: {
        premium: '$1,009.25',
        medical: '$250.00',
        dental: '$250.00',
        vision: '$250.00',
        contraceptive: '$250.00',
        service: '$9.25',
      },
    };
  }

  export function createRates(num) {
      const anotherRows = []
    for (let i = 0; i < num; i++) {
      anotherRows.push({
          eligibility: '11/01/2019 - 12/01/2019',
          product: 'Pool V RB As Gold 1000',
          marketSegment: 'Grandfathered',
          totalPremium: '$4,009.25',
          details: [
            createRowItem(),
            createRowItem(),
            createRowItem(),
            createRowItem(),
            ]
      });
    }
    return anotherRows;
  }

  export function createRate() {
   return {
        eligibility: '11/01/2019 - 12/01/2019',
        product: 'Pool V RB As Gold 1000',
        marketSegment: 'Grandfathered',
        totalPremium: '$4,009.25',
        details: [
          createRowItem(),
          createRowItem(),
          createRowItem(),
          createRowItem(),
          ]
    }
}