import { Component, OnInit, Input } from '@angular/core';
import { AdvancedPremimumTaxCredit } from '../../../models/billing-info';
import { CrmAutoTableColumn } from 'crm-ui-ux';

@Component({
  selector: 'app-advanced-premimum-tax-credit',
  templateUrl: './advanced-premimum-tax-credit.component.html',
  styleUrls: ['./advanced-premimum-tax-credit.component.scss']
})
export class AdvancedPremimumTaxCreditComponent implements OnInit {

  @Input() advancedPremimumTaxCredit: AdvancedPremimumTaxCredit[];

  columns: CrmAutoTableColumn[] = [
    {
      label: 'Effective Date',
      property: 'effectiveDate',
      useSort: true,
    },
    {
      label: 'Termination Date',
      property: 'terminationDate',
      useSort: true,
    },
    {
      label: 'Amount',
      property: 'amount',
      useSort: true,
    }  
  ];

  page = 0;

  constructor() { }

  ngOnInit() {
  }

}
