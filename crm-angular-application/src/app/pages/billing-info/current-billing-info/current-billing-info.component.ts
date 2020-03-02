import { Component, OnInit, Input } from '@angular/core';
import { CurrentBillingInfo } from '../../../models/billing-info';
import { Router } from '@angular/router';

@Component({
  selector: 'app-current-billing-info',
  templateUrl: './current-billing-info.component.html',
  styleUrls: ['./current-billing-info.component.scss']
})
export class CurrentBillingInfoComponent implements OnInit {

  @Input() currentBillinginfo: CurrentBillingInfo;
  @Input() selectStates: any;
  @Input() selectable: boolean;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToSubgroupAccount(id, name){
    //this.router.navigate([`/billing-subgroup/${id}/${name}`])
  } 

}
