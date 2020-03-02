import { Component, OnInit, Input } from '@angular/core';
import { PremimumPaid } from '../../../models/billing-info';

@Component({
  selector: 'app-permium-paid',
  templateUrl: './permium-paid.component.html',
  styleUrls: ['./permium-paid.component.scss']
})
export class PermiumPaidComponent implements OnInit {

  @Input() premimumPaid: PremimumPaid[];

  @Input() selectable: boolean;

  constructor() { }

  ngOnInit() {
  }

}
