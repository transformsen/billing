import { Component, OnInit, Input } from '@angular/core';
import { CrmAutoTableColumn } from 'crm-ui-ux/lib/components/crm-table/crm-auto-table/crm-auto-table.component';
import { BillingNotes } from '../../../models/billing-info';

@Component({
  selector: 'app-billing-notes',
  templateUrl: './billing-notes.component.html',
  styleUrls: ['./billing-notes.component.scss']
})
export class BillingNotesComponent implements OnInit {

  @Input() billingNotes: BillingNotes[];

  billingNotesColumns: CrmAutoTableColumn[] = [
    {
      label: 'Modified Date',
      property: 'modifiedDate',
      useSort: true,
    },
    {
      label: 'Description',
      property: 'description',
    },
    {
      label: 'Note From Billing',
      property: 'note',
      useCustomCell: true,
    },
  ];

  billingNotesRows = [];
  billingNotesPage = 0;

  constructor() { }

  ngOnInit() {
  }

}
