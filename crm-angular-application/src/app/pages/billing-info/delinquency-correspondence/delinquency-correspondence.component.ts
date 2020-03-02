import { Component, OnInit, Input } from '@angular/core';
import { DelinquencyCorrespondence } from '../../../models/billing-info';
import { CrmAutoTableColumn } from 'crm-ui-ux/lib/components/crm-table/crm-auto-table/crm-auto-table.component';

@Component({
  selector: 'app-delinquency-correspondence',
  templateUrl: './delinquency-correspondence.component.html',
  styleUrls: ['./delinquency-correspondence.component.scss']
})
export class DelinquencyCorrespondenceComponent implements OnInit {

  @Input() delinquencyCorrespondence: DelinquencyCorrespondence[];

  columns: CrmAutoTableColumn[] = [
    {
      label: 'Date',
      property: 'date',
      useSort: true,
    },
    {
      label: 'Description',
      property: 'description',
      useSort: true,
    },
    {
      label: 'Document',
      property: 'document',
      useSort: true,
    }  
  ];

  page = 0;
  constructor() { }

  ngOnInit() {
  }

}
