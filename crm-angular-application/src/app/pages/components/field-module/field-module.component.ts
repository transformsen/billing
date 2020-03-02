import { Component, OnInit } from '@angular/core';
import {
  CrmDateValidator,
  CrmRequiredValidator, CrmSsnValidator,
  CrmValidator
} from 'crm-ui-ux';

@Component({
  selector: 'app-field-module',
  templateUrl: './field-module.component.html',
  styleUrls: ['./field-module.component.scss']
})
export class FieldModuleComponent implements OnInit {
  onlyRequiredValidators: CrmValidator[] = [
    CrmRequiredValidator('Value is required'),
  ];

  requiredDateValidators: CrmValidator[] = [
    CrmRequiredValidator('Value is required'),
    CrmDateValidator('Date is invalid'),
  ];

  requiredSSNValidators: CrmValidator[] = [
    CrmRequiredValidator('Value is required'),
    CrmSsnValidator('SSN is invalid'),
  ];

  constructor() { }

  ngOnInit() {
  }

  handleInvalid() {
    console.log('handle invalid field');
  }
}
