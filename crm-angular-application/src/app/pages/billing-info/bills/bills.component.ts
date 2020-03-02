import { Component, OnInit, Input } from '@angular/core';
import { Bills } from '../../../models/billing-info';
import { CrmAutoTableColumn } from 'crm-ui-ux';

@Component({
  selector: 'app-bills',
  templateUrl: './bills.component.html',
  styleUrls: ['./bills.component.scss']
})
export class BillsComponent implements OnInit {

  @Input() bills: Bills[];

  billsColumns: CrmAutoTableColumn[] = [
    {
      label: 'Invoice Number',
      property: 'invoiceNumber',
      useCustomCell: true,
      useSort: true,
    },
    {
      label: 'Invoice Create Date',
      property: 'invoiceCreateDate',
      useSort: true,
    },
    {
      label: 'Billing Period Begin Date',
      property: 'billingPeriodBeginDate',
      useSort: true,
    },
    {
      label: 'Billing Period End Date',
      property: 'billingPeriodEndDate',
      useSort: true,
    },
    {
      label: 'Current Payment Status',
      property: 'currentPaymentStatus',
      useSort: true,
    },
    {
      label: 'Total Billed Amount',
      property: 'totalBilledAmount',
      align: 'end',
    },
  ];

  billsRows = [];
  billsPage = 0;

  
  constructor() { }

  ngOnInit() {
  }

}
