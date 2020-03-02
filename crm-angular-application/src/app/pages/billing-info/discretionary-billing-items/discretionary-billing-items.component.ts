import { Component, OnInit, Input } from '@angular/core';
import { DiscretionaryBillingItems } from '../../../models/billing-info';
import { CrmAutoTableColumn } from 'crm-ui-ux/lib/components/crm-table/crm-auto-table/crm-auto-table.component';

@Component({
  selector: 'app-discretionary-billing-items',
  templateUrl: './discretionary-billing-items.component.html',
  styleUrls: ['./discretionary-billing-items.component.scss']
})
export class DiscretionaryBillingItemsComponent implements OnInit {

  @Input() discretionaryBillingItems: DiscretionaryBillingItems[];

  columns: CrmAutoTableColumn[] = [
    {
      label: 'Last Updated',
      property: 'lastUpdate',
      useSort: true,
    },
    {
      label: 'Description',
      property: 'description',
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
