import {Component, HostBinding, Input, OnInit} from '@angular/core';
import {is} from '../../util/is.util';

export type CrmIcons =
  'document-add'
  | 'document-check'
  | 'sort-up'
  | 'sort-down'
  | 'filter'
  | 'help'
  | 'help-blue'
  | 'chevron-down'
  | 'search';

@Component({
  selector: 'crm-icon',
  templateUrl: './crm-icon.component.html',
  styleUrls: ['./crm-icon.component.scss']
})
export class CrmIconComponent implements OnInit {
  @Input() icon: CrmIcons;
  @Input() set clickable(value) {
    this.canClick = is.Exists(value);
  }

  @HostBinding('class.clickable') canClick = false;

  constructor() { }

  ngOnInit() {
  }

}
