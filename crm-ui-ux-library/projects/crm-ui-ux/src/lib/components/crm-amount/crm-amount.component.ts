import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'crm-amount',
  templateUrl: './crm-amount.component.html',
  styleUrls: ['./crm-amount.component.scss']
})
export class CrmAmountComponent implements OnInit {
  @Input() value: number;

  constructor() { }

  ngOnInit() {
  }

}
