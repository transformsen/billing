import { Component, OnInit } from '@angular/core';
import {LogService} from '../../services/log.service';


@Component({
  selector: 'app-billing-search',
  templateUrl: './billing-search.component.html',
  styleUrls: ['./billing-search.component.scss']
})
export class BillingSearchComponent implements OnInit {
  tab = 'individual';

  constructor(
    public logService: LogService,
  ) { }

  ngOnInit() {    
  }
 
  tabSelection($event){
    this.tab = $event;
  }
}
