import { Component, OnInit, Input } from '@angular/core';
import { CurrentBillingStatus } from '../../../models/billing-info';

@Component({
  selector: 'app-current-billing-status',
  templateUrl: './current-billing-status.component.html',
  styleUrls: ['./current-billing-status.component.scss']
})
export class CurrentBillingStatusComponent implements OnInit {

  @Input() currentBillingStatus: CurrentBillingStatus;
  @Input() selectStates: any;
  @Input() selectable: boolean;
  
  constructor() { }

  ngOnInit() {
  }

}
