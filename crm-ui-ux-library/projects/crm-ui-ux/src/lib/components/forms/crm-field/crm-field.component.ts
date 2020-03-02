import {AfterContentInit, Component, ContentChild, EventEmitter, HostBinding, Input, OnDestroy, OnInit, Output, NgZone} from '@angular/core';
import {is} from '../../../util/is.util';
import {CrmInputComponent} from '../crm-input/crm-input.component';
import {Subscription} from 'rxjs';
import {take} from 'rxjs/operators';
import {SubscribeUtil} from '../../../util/subscribe.util';

export interface CrmValidator {
  // error message
  message: string;

  /**
   * validate function
   * return true when value is valid
   * @param value value to check
   */
  validate(value: string): boolean;
}

/**
 * preset validator for required value
 * @param message error message
 */
export function CrmRequiredValidator(message: string = 'Value is required'): CrmValidator {
  return {
    message,
    validate: (value: string) => {
      return !is.UndefinedOrNull(value) && !is.EmptyString(value);
    },
  };
}

/**
 * preset validator for ssn value
 * @param message error message
 */
export function CrmSsnValidator(message: string = 'Invalid format'): CrmValidator {
  return {
    message,
    validate: (value: string) => {
      return is.SSN(value);
    },
  };
}

/**
 * preset validator for date value
 * @param message error message
 */
export function CrmDateValidator(message: string = 'Invalid format'): CrmValidator {
  return {
    message,
    validate: (value: string) => {
      return is.formattedDate(value);
    },
  };
}

@Component({
  selector: 'crm-field',
  templateUrl: './crm-field.component.html',
  styleUrls: ['./crm-field.component.scss']
})
export class CrmFieldComponent implements OnInit, OnDestroy, AfterContentInit {
  @Input() label: string;
  @Input() helper: string;
  @Input() set required(value) {
    this.isRequired = is.Exists(value) && value !== false;
  }

  @Input() validators: CrmValidator[] = [];
  @Output() valueInvalid: EventEmitter<void> = new EventEmitter<void>();
  @ContentChild(CrmInputComponent, {static: false}) private crmInputComponent: CrmInputComponent;

  @HostBinding('class.has-error') hasError = false;

  isRequired = false;
  errorMessage = null;

  private inputSubscription: Subscription;

  constructor(private ngZone: NgZone) { }

  ngOnInit() {
  }

  ngAfterContentInit(): void {
    this.subscribeForInputChange();
  }

  ngOnDestroy(): void {
    SubscribeUtil.unSubscribe(this.inputSubscription);
  }

  /**
   * subscribe valueChange event form input component to validate value
   */
  private subscribeForInputChange() {
    if (this.crmInputComponent) {
      this.inputSubscription = this.crmInputComponent.valueChange
        .subscribe(value => {
          this.validateInputValue(value);
        });
    }
  }

  /**
   * validate input value with validators
   * @param value value
   */
  private validateInputValue(value: string) {
    let invalid = this.hasError = false;
    let invalidMessage;

    for (const validator of this.validators) {
      if (!validator.validate(value)) {
        invalid = true;
        invalidMessage = validator.message;
        break;
      }
    }

    this.ngZone.onStable.asObservable().pipe(take(1)).subscribe(() => {
      if (invalid) {
        this.errorMessage = invalidMessage;
        this.crmInputComponent.hasError = this.hasError = true;
        this.valueInvalid.emit();
      }
    });
  }
}
