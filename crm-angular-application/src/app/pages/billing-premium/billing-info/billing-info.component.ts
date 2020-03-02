import { Component, OnInit, Input } from '@angular/core';
import { BillingInfo } from '../../../models/billing-info';
import { Observable } from 'rxjs';
import { BillingService } from 'src/app/services/billing.service';

@Component({
  selector: 'app-billing-info',
  templateUrl: './billing-info.component.html',
  styleUrls: ['./billing-info.component.scss']
})
export class BillingInfoComponent implements OnInit {

  @Input() policyId: string;
  billingInfo$: Observable<BillingInfo>;
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
  
  constructor(private billingService: BillingService){}

  ngOnInit(){
    this.billingInfo$ = this.billingService.getBillingInfo(this.policyId)
  }

}
