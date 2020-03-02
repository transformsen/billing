const express = require('express')
const cors = require('cors');
const util = require('./util')
const app = express()
app.use(cors());


const port = 3000
app.get('/billing-individual', (req, res) => {
    const policyId = req.query.policyId;
    const rows = [];
    for (let i = 0; i < 8; i++) {
        rows.push({
          policyId: 'W'+i+'0000',
          policyholder: util.pickOne(['Hong Chiao', 'Sao Tome']),
          policyType: util.randomRange(1000, 9999),
          groupName: util.pickOne(['Glen Stevenson', 'Roy Chapman']),
          dob: util.randomDate(),
          effectiveDate: util.randomDate(),
          terminationDate: util.randomDate(),
        });
      }
      const filteredRows = groupFilter(rows, 'policyId', policyId)
      setTimeout(()=>{res.json(filteredRows)}, 1000) 
})

app.get('/billing-group', (req, res) => {
    const groupId = req.query.groupId;
    const subGroupId = req.query.subGroupId;
    const groupName = req.query.groupName;

    const rows = [];
    for (let i = 0; i < 8; i++) {
        rows.push({
          groupId: i+'000000',
          subgroupId: i+'000000',
          groupName:(i%2==0)? 'Hong Chiao' : 'Sao Tome',
          billingFrequency: util.randomRange(1000, 9999),
          subgroupName: util.pickOne(['Glen Stevenson', 'Roy Chapman']),
          effectiveDate: util.randomDate(),
          terminationDate: util.randomDate(),
        });
      }
    const filteredByGroupId= groupFilter(rows, 'groupId', groupId)
    const filteredSubGroup = groupFilter(filteredByGroupId, 'subgroupId', subGroupId)
    const filteredRow = groupFilter(filteredSubGroup, 'groupName', groupName)

    setTimeout(()=>{res.json(filteredRow)}, 1000) 
})

app.get('/sub-group', (req, res)=>{
    const subgrop = {
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
    setTimeout(()=>{res.json(subgrop)}, 1000)
})

app.get('/billing-info', (req, res)=>{
    const subgrop = {
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
        discretionaryBillingItems: DiscretionaryBillingItems(),
        advancedPremimumTaxCredit: AdvancedPremimumTaxCredit(),
        premimumPaid: PremimumPaid()

    }
    setTimeout(()=>{res.json(subgrop)}, 1000)
})


app.get('/premium-breakdown', (req, res)=>{
    const premiumBreakdown = {
        featureRate: createRate(),
        currentRate: createRate(),
        previousRate: createRates(10)
    }
    setTimeout(()=>{res.json(premiumBreakdown)}, 1000)
});

function groupFilter(rows, filterById, filterByValue){
    return rows.filter((item)=>{
        if(!filterByValue || filterByValue==''){
          return true
        }else{
          return item[filterById].toUpperCase().includes(filterByValue.toUpperCase())
        }
    })
}

function createDelinquencyCorrespondence() {
    const billingNotesRows = []
    for (let i = 0; i < 30; i++) {
      billingNotesRows.push({
        date: util.randomDate(),
        description: 'Deduct Payment',
        document: 'Docuemnt'+1
    })
    return billingNotesRows;
}
}


function DiscretionaryBillingItems() {
    const billingNotesRows = []
    for (let i = 0; i < 30; i++) {
        billingNotesRows.push({
        lastUpdate: util.randomDate(),
        description: 'Deduct Payment',
        amount: '$1000.00'
        })
    }
    return billingNotesRows;
}

function AdvancedPremimumTaxCredit() {
    const billingNotesRows = []
    for (let i = 0; i < 30; i++) {
        billingNotesRows.push({
            effectiveDate : util.randomDate(),
            terminationDate: util.randomDate(),
        amount: '$1000.00'
        })
    }
    return billingNotesRows;
}

function PremimumPaid(){
    const billingNotesRows = []
    for (let i = 0; i < 5; i++) {
        billingNotesRows.push({
            year : '201'+i,
            amount: '$1000.00'
        })
    }
    return billingNotesRows;
}

function createBillingNotesRows() {
    const billingNotesRows = []
    for (let i = 0; i < 30; i++) {
      billingNotesRows.push({
        modifiedDate: util.randomDate(),
        description: 'Deduct Payment',
        note: util.pickOne([
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

  function createBillsRows() {
      const billsRows = []
    for (let i = 0; i < 30; i++) {
      billsRows.push({
        invoiceNumber: '123456789',
        invoiceCreateDate: util.randomDate(),
        billingPeriodBeginDate: util.randomDate(),
        billingPeriodEndDate: util.randomDate(),
        currentPaymentStatus: 'Paid in Full',
        totalBilledAmount: '$1,000.00',
      });
    }
    return billsRows;
  }

 function createPaymentsRows() {
    paymentsRows = []
    for (let i = 0; i < 30; i++) {
      paymentsRows.push({
        createDate: util.randomDate(),
        receivedDate: util.randomDate(),
        paymentMethod: util.pickOne(['Check', 'Refund']),
        checkNo: util.randomRange(100000000, 999999999),
        amount: util.randomRange(0, 9999999) - util.randomRange(0, 9999999),
        memo: util.pickOne([
          // tslint:disable-next-line:max-line-length
          'Amet vitae maxime omnis voluptatem. Amet vitae dmefg oaeiugf seiyg fsiheg fiseg fils. Amet vitae dmefg oaeiugf seiyg fsiheg fiseg fils. Amet vitae dmefg oaeiugf seiyg fsiheg fiseg fils',
          'Lorem',
        ]),
        reason: util.pickOne([
          // tslint:disable-next-line:max-line-length
          'Amet vitae maxime omnis voluptatem. Amet vitae dmefg oaeiugf seiyg fsiheg fiseg fils. Amet vitae dmefg oaeiugf seiyg fsiheg fiseg fils. Amet vitae dmefg oaeiugf seiyg fsiheg fiseg fils',
          'Lorem',
        ]),
      });
    }
    return paymentsRows;
  }


 function createRowItem() {
    return {
      name: util.pickOne([
        'John James Wilkes',
        'Marry Ann Wilkes',
        'Jo Wilkes',
        'Bob Ann Wilkes',
      ]),
      role: util.pickOne([
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

  function createRates(num) {
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

  function createRate() {
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
app.listen(port, () => console.log(`Example app listening on port ${port}!`))