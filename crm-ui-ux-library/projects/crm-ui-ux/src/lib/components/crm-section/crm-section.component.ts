import {Component, HostBinding, Input, OnInit} from '@angular/core';

export type CrmSectionDisplay = 'horizontal' | 'vertical';

@Component({
  selector: 'crm-section',
  templateUrl: './crm-section.component.html',
  styleUrls: ['./crm-section.component.scss']
})
export class CrmSectionComponent implements OnInit {
  @Input() @HostBinding('attr.crm-section-display') display: CrmSectionDisplay = 'vertical';

  constructor() { }

  ngOnInit() {
  }
}
