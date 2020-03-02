import {Directive, Input, TemplateRef} from '@angular/core';

@Directive({
  selector: '[crmCustomCell]'
})
export class CrmCustomCellDirective {
  @Input() property: string;

  constructor(
    public templateRef: TemplateRef<any>,
  ) { }

}
