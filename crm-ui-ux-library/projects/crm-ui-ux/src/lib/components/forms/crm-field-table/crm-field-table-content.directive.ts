import {Directive, EventEmitter, Input, OnChanges, Output, SimpleChanges, TemplateRef} from '@angular/core';
import {is} from '../../../util/is.util';

@Directive({
  selector: '[crmFieldTableContent]'
})
export class CrmFieldTableContentDirective implements OnChanges {
  @Input() selected = false;
  @Input() set selectable(value) {
    this.isSelectable = is.Exists(value) && value !== false;
  }

  @Output() selectedChange: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() selectableStateChange: EventEmitter<void> = new EventEmitter<void>();

  isSelectable = false;

  constructor(
    public templateRef: TemplateRef<any>,
  ) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes && changes.selectable) {
      if (changes.selectable.previousValue !== changes.selectable.currentValue) {
        this.selectableStateChange.emit();
      }
    }
  }
}
