import { Component, OnInit, Input } from '@angular/core';
import { BillingContact } from '../../../models/billing-info';

@Component({
  selector: 'app-billing-contact',
  templateUrl: './billing-contact.component.html',
  styleUrls: ['./billing-contact.component.scss']
})
export class BillingContactComponent implements OnInit {

  @Input() billingContact: BillingContact;
  @Input() selectStates: any;
  @Input() selectable: boolean;
  
  constructor() { }

  ngOnInit() {
  }

}
