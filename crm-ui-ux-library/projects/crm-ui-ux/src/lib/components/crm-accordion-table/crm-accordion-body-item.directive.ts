import {Directive, Input, TemplateRef} from '@angular/core';
import {CrmAccordionCellHorizontalAlign, CrmAccordionCellVerticalAlign} from './crm-accordion-table.component';

@Directive({
  selector: '[crmAccordionBodyItem]'
})
export class CrmAccordionBodyItemDirective {
  @Input() identifier: string;
  @Input() verticalAlign: CrmAccordionCellVerticalAlign = 'middle';
  @Input() horizontalAlign: CrmAccordionCellHorizontalAlign = 'start';

  constructor(
    public templateRef: TemplateRef<any>,
  ) { }

}
