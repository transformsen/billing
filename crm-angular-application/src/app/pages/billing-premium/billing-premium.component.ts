import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-billing-premium',
  templateUrl: './billing-premium.component.html',
  styleUrls: ['./billing-premium.component.scss']
})
export class BillingPremiumComponent implements OnInit, OnDestroy {
  tab = 'billing-info';
  
  policyName: string;
  policyId: string;

  subscriptions: Subscription;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
   
    this.subscriptions = this.activatedRoute.params.subscribe((params)=>{
        this.policyName = params.policyName;
        this.policyId = params.policyId;
      }
    ) 
  }  

  setSelectedTab($event){
    this.tab = $event;
  }

  ngOnDestroy(){
    this.subscriptions.unsubscribe()
  }
}
