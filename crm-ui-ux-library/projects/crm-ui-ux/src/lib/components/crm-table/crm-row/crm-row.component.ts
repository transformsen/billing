import {Component, HostBinding, Input, OnInit} from '@angular/core';
import {is} from '../../../util/is.util';

@Component({
  selector: 'crm-row',
  templateUrl: './crm-row.component.html',
  styleUrls: ['./crm-row.component.scss']
})
export class CrmRowComponent implements OnInit {
  @Input() set header(value) {
    this.isHeader = is.Exists(value) && value !== false;
  }

  @HostBinding('class.header') isHeader = false;

  constructor() { }

  ngOnInit() {
  }

}
