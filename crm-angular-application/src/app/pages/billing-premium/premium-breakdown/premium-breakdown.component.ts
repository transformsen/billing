import { Component, OnInit, Input } from '@angular/core';
import { BillingService } from 'src/app/services/billing.service';
import { PremiumBreakDown } from 'src/app/models/premium-breakdown';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-premium-breakdown',
  templateUrl: './premium-breakdown.component.html',
  styleUrls: ['./premium-breakdown.component.scss']
})
export class PremiumBreakdownComponent implements OnInit {

  @Input() policyId: string;

  premiumBreakdown$: Observable<PremiumBreakDown>;
  page = 0;

  constructor(private billingService: BillingService) { }

  ngOnInit() {
    this.premiumBreakdown$ = this.billingService.getPremiumBreakdown(this.policyId)
  }

}
