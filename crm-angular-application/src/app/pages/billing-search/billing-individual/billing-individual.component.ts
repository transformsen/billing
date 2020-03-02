import { Component, OnInit } from '@angular/core';
import {pickOne, randomDate, randomRange} from '../../../util/mock.util';
import { CrmAutoTableColumn } from 'crm-ui-ux';
import { BillingService } from 'src/app/services/billing.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { BillingIndividual } from 'src/app/models/billing-search';


@Component({
  selector: 'app-billing-individual',
  templateUrl: './billing-individual.component.html',
  styleUrls: ['./billing-individual.component.scss']
})
export class BillingIndividualComponent implements OnInit {

  socialSecurityNumber: string;
  policyId: string;
  

  columns: CrmAutoTableColumn[] = [
    {
      label: 'Policy ID',
      property: 'policyId',
      useCustomCell: true
    },
    {
      label: 'Policyholder',
      property: 'policyholder'
    },
    {
      label: 'Date of Birth',
      property: 'dob'
    },
    {
      label: 'Effective Date',
      property: 'effectiveDate'
    },
    {
      label: 'Termination Date',
      property: 'terminationDate',
    },
    {
      label: 'Policy Type',
      property: 'policyType',
    },
    {
      label: 'Group Name',
      property: 'groupName',
    }
  ];

  data$: Observable<BillingIndividual>;

  constructor(private billingService: BillingService,
    private router: Router) { }

  ngOnInit() {
    this.fetchData();
  }

  fetchData(){
    this.data$ = this.billingService.getBillingIndividual(this.socialSecurityNumber || ''
        , this.policyId ||'')
  }  

  reset(){
    this.socialSecurityNumber = '';
    this.policyId = '';
  }

  billingPremium(id, name){
    this.router.navigate([`/billing-premium/${id}/${name}`])
  }
}
