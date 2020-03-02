import {Component, HostBinding, Input, OnInit} from '@angular/core';
import {is} from '../../../util/is.util';
import {CrmIcons} from '../../crm-icon/crm-icon.component';

export type CrmButtonType = 'primary' | 'secondary' | 'inline';
export type CrmButtonAlign = 'start' | 'center' | 'end';

@Component({
  selector: 'crm-button',
  templateUrl: './crm-button.component.html',
  styleUrls: ['./crm-button.component.scss']
})
export class CrmButtonComponent implements OnInit {
  @Input() @HostBinding('attr.crm-button-type') type: CrmButtonType = 'primary';
  @Input() @HostBinding('attr.crm-button-align') align: CrmButtonAlign = 'center';
  @Input() set disabled(value) {
    this.isDisabled = is.Exists(value) && value !== false;
  }

  @Input() set dropdown(value) {
    this.isDropdown = is.Exists(value) && value !== false;
  }

  @Input() set search(value) {
    this.isSearch = is.Exists(value) && value !== false;
  }

  @HostBinding('attr.tabindex') index = -1;
  @HostBinding('class.active') active = false;
  @HostBinding('class.hovered') hovered = false;
  @HostBinding('class.focused') focused = false;
  @HostBinding('class.disabled') isDisabled = false;

  isDropdown = false;
  isSearch = false;

  constructor() { }

  ngOnInit() {
  }

  /**
   * return icon name by button status
   */
  getIcon(): CrmIcons {
    if (this.isDropdown) {
      return 'chevron-down';
    } else if (this.isSearch) {
      return 'search';
    }
  }
}
