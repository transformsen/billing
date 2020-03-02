import { Component, OnInit, Input } from '@angular/core';
import { Payments } from '../../../models/billing-info';
import { CrmAutoTableColumn } from 'crm-ui-ux';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.scss']
})
export class PaymentsComponent implements OnInit {

  @Input() payments: Payments[];

  paymentsColumns: CrmAutoTableColumn[] = [
    {
      label: 'Create Date',
      property: 'createDate',
    },
    {
      label: 'Received Date',
      property: 'receivedDate',
    },
    {
      label: 'Payment Method',
      property: 'paymentMethod',
    },
    {
      label: 'Check No.',
      property: 'checkNo',
    },
    {
      label: 'Amount',
      property: 'amount',
      useCustomCell: true,
    },
    {
      label: 'Memo',
      property: 'memo',
      useCustomCell: true,
    },
    {
      label: 'Reason',
      property: 'reason',
      useCustomCell: true,
    },
  ];

  paymentsRows = [];
  paymentsPage = 0;
  paymentDateForTermination = {
    label: 'Last Processed Date for Termination',
    value: '01/12/2020'
  }

  
  constructor() { }

  ngOnInit() {
  }

}
