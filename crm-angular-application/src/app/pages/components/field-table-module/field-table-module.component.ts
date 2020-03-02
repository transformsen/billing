import { Component, OnInit } from '@angular/core';
import {CrmDropdownOption} from 'crm-ui-ux';

@Component({
  selector: 'app-field-table-module',
  templateUrl: './field-table-module.component.html',
  styleUrls: ['./field-table-module.component.scss']
})
export class FieldTableModuleComponent implements OnInit {
  selected = false;

  value = '';
  options: CrmDropdownOption[] = [
    {
      label: 'Option 1',
      value: '1',
    },
    {
      label: 'Option 2',
      value: '2',
    },
    {
      label: 'Option 3',
      value: '3',
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
