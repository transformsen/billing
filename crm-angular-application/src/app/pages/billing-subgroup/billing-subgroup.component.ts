import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { BillingService } from 'src/app/services/billing.service';
import { Observable } from 'rxjs';
import { BillingSubgroup } from 'src/app/models/billing-subgroup';

@Component({
  selector: 'app-billing-subgroup',
  templateUrl: './billing-subgroup.component.html',
  styleUrls: ['./billing-subgroup.component.scss']
})
export class BillingSubgroupComponent implements OnInit {
  selectable = true;
  selectStates = {
    billingFrequency: false,
    statementType: false,
    suspendedBilling: false,
    netAmountDue: false,
    currentSuspense: false,
    eligibilityThroughDate: false,
    potentialLateFeeAmount: false,
    name: false,
    phone: false,
  };

  subGroupData$: Observable<BillingSubgroup>;
  subGroupName: string;

  constructor(private activatedRoute: ActivatedRoute,
    private billingService: BillingService) { }

  ngOnInit() {
   
    this.subGroupData$ = this.activatedRoute.params.pipe(
      switchMap((params)=>{
        this.subGroupName = params.subgroupName;
        return this.billingService.getBillingSubGroup(params.subgroupId)
      })
    )
  }
}
