import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  HostBinding,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild
} from '@angular/core';
import {is} from '../../../util/is.util';
import {to} from '../../../util/to.util';

export type CrmInputType = 'text' | 'ssn' | 'date';

@Component({
  selector: 'crm-input',
  templateUrl: './crm-input.component.html',
  styleUrls: ['./crm-input.component.scss']
})
export class CrmInputComponent implements OnInit, OnChanges, AfterViewInit {
  @Input() type: CrmInputType = 'text';
  @Input() value: string;
  @Input() placeholder = '';
  @Input() set disabled(value) {
    this.isDisabled = is.Exists(value) && value !== false;
  }

  @Output() valueChange: EventEmitter<string> = new EventEmitter<string>();
  @ViewChild('inputElement', {static: false}) private inputElement: ElementRef<HTMLInputElement>;

  @HostBinding('attr.tabindex') index = -1;
  @HostBinding('class.disabled') isDisabled = false;
  @HostBinding('class.hovered') hovered = false;
  @HostBinding('class.focused') focused = false;
  @HostBinding('class.has-error') hasError = false;

  isDeleting = null;
  hasNextValue = false;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.setInputValue(this.value || '');
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes && changes.value) {
      if (changes.value.previousValue !== changes.value.currentValue) {
        this.setInputValue(changes.value.currentValue);
      }
    }
  }

  /**
   * detect input event from input element
   * @param event event
   */
  detectInput(event: Event) {
    this.setInputValue((event.target as HTMLInputElement).value);
  }

  /**
   * detect keydown event from input element
   * @param event event
   */
  detectKeydown(event: KeyboardEvent) {
    this.isDeleting = (event.key || event.code) === 'Backspace';
  }

  /**
   * set input value forcefully
   * @param value value
   */
  setInputValue(value: string) {
    if (this.inputElement && this.inputElement.nativeElement) {
      const input = this.inputElement.nativeElement;
      const selection = input.selectionStart;

      if (this.type === 'date') {
        if (to.dateToString(value).trim() !== '') {
          value = to.formattedDate(value);
        } else {
          value = '';
        }
      } else if (this.type === 'ssn') {
        if (to.ssnToString(value).trim() !== '') {
          value = to.SSN(value);
        } else {
          value = '';
        }
      }

      input.value = value;

      if (this.type === 'date') {
        this.adjustSelection([3, 6], selection);
      } else if (this.type === 'ssn') {
        this.adjustSelection([4, 7], selection);
      }

      this.valueChange.emit(value);
      this.isDeleting = null;
      this.hasNextValue = false;
    }
  }

  /**
   * adjust selection with break points
   * @param points break points
   * @param selection selection index
   */
  private adjustSelection(points: number[], selection: number) {
    if (this.isDeleting === false) {
      if (points.indexOf(selection) !== -1) {
        this.setInputSelection(selection + 1);
      } else {
        this.setInputSelection(selection);
      }
    } else if (this.isDeleting === true) {
      if (points.indexOf(selection) !== -1) {
        this.setInputSelection(selection - 1);
      } else {
        this.setInputSelection(selection);
      }
    }
  }

  /**
   * set input start/end selection
   * @param index selection index
   */
  private setInputSelection(index: number) {
    if (this.inputElement && this.inputElement.nativeElement) {
      this.inputElement.nativeElement.selectionStart = index;
      this.inputElement.nativeElement.selectionEnd = index;
    }
  }
}
