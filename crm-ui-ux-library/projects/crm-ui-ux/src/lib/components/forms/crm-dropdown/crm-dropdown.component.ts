import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  HostBinding,
  HostListener, Inject,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges, ViewChild
} from '@angular/core';
import {PositionUtil} from '../../../util/position.util';
import {DOCUMENT} from '@angular/common';

export type CrmDropdownListPosition = 'top' | 'bottom';
export interface CrmDropdownOption {
  label: string;
  value: string;
}

@Component({
  selector: 'crm-dropdown',
  templateUrl: './crm-dropdown.component.html',
  styleUrls: ['./crm-dropdown.component.scss']
})
export class CrmDropdownComponent implements OnInit, OnChanges {
  @Input() value: string;
  @Input() options: CrmDropdownOption[] = [];
  @Input() placeholder = 'Select...';
  @Output() valueChange: EventEmitter<string> = new EventEmitter<string>();
  @ViewChild('listElement', {static: false}) private listElement: ElementRef<HTMLDivElement>;

  visiblePlaceholder = '';

  @HostBinding('attr.crm-dropdown-list-position') position: CrmDropdownListPosition = 'bottom';
  @HostBinding('class.opened') opened = false;

  constructor(
    private elementRef: ElementRef<HTMLElement>,
    private changeDetectorRef: ChangeDetectorRef,
    @Inject(DOCUMENT) private document,
  ) { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.setVisiblePlaceholder();
  }

  /**
   * set visible placeholder
   */
  setVisiblePlaceholder() {
    const option = this.options.find(item => item.value === this.value);

    if (option) {
      this.visiblePlaceholder = option.label;
    } else {
      this.visiblePlaceholder = this.placeholder;
    }
  }

  /**
   * handle select option
   * @param option option
   */
  selectOption(option: CrmDropdownOption) {
    this.setVisiblePlaceholder();

    this.valueChange.emit(option.value);
    this.close();
  }

  /**
   * detect click event
   * @param event mouse event
   */
  @HostListener('document:click', ['$event'])
  detectClick(event: MouseEvent) {
    if (!PositionUtil.contains(event.target as HTMLElement, this.elementRef)) {
      this.close();
    }
  }

  /**
   * toggle dropdown
   */
  toggle() {
    this.opened = !this.opened;

    if (this.opened) {
      this.detectDropdownListPosition();
    }
  }

  /**
   * close dropdown
   */
  close() {
    this.opened = false;
    this.position = 'bottom';
  }

  /**
   * detect dropdown list position
   */
  private detectDropdownListPosition() {
    this.changeDetectorRef.detectChanges();

    if (this.listElement && this.listElement.nativeElement) {
      this.position = PositionUtil.getAvailablePosition(this.listElement.nativeElement, this.document.body, 'bottom');
    }
  }
}
