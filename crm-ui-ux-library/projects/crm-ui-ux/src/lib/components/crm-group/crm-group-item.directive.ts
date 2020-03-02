import {Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[crmGroupItem]'
})
export class CrmGroupItemDirective {

  constructor(
    public elementRef: ElementRef<HTMLElement>,
  ) { }

}
