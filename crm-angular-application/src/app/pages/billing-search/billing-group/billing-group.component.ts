import { Component, OnInit } from '@angular/core';
import { BillingService } from 'src/app/services/billing.service';
import { CrmAutoTableColumn } from 'crm-ui-ux';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { BillingGroup } from 'src/app/models/billing-search';

@Component({
  selector: 'app-billing-group',
  templateUrl: './billing-group.component.html',
  styleUrls: ['./billing-group.component.scss']
})
export class BillingGroupComponent implements OnInit {

  groupName: string;
  groupId: string;
  subGroupId: string;

  columns: CrmAutoTableColumn[] = [
    {
      label: 'Group ID',
      property: 'groupId',
    },
    {
      label: 'Group Name',
      property: 'groupName',
    },
    {
      label: 'Subgroup ID',
      property: 'subgroupId',
      useCustomCell: true,
    },
    {
      label: 'Subgroup Name',
      property: 'subgroupName',
      useCustomCell: true,
    },
    {
      label: 'Effective Date',
      property: 'effectiveDate',
    },
    {
      label: 'Termination Date',
      property: 'terminationDate',
    }
  ];

  data$: Observable<BillingGroup>;

  constructor(private billingService: BillingService,
    private router: Router) { }

  ngOnInit() {
    this.fetchData();
  }

  fetchData(){
    this.data$ = this.billingService.getBillingGroup(this.groupName || '', 
        this.groupId || '', this.subGroupId || '')
  }  

  reset(){
    this.groupName = '';
    this.groupId = '';
    this.subGroupId = '';
  }

  billingSubGroup(id, name){
    this.router.navigate([`/billing-subgroup/${id}/${name}`])
  }

}
