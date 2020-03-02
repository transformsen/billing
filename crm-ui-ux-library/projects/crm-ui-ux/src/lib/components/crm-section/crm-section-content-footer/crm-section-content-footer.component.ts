import {Component, HostBinding, Input, OnInit} from '@angular/core';

export type CrmSectionContentFooterAlign = 'start' | 'end' | 'center';

@Component({
  selector: 'crm-section-content-footer',
  templateUrl: './crm-section-content-footer.component.html',
  styleUrls: ['./crm-section-content-footer.component.scss']
})
export class CrmSectionContentFooterComponent implements OnInit {
  @Input() @HostBinding('attr.crm-section-footer-align') align: CrmSectionContentFooterAlign = 'start';

  constructor() { }

  ngOnInit() {
  }

}
