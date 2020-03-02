import { Component, OnInit } from '@angular/core';
import {CrmDropdownOption} from 'crm-ui-ux';

@Component({
  selector: 'app-dropdown-module',
  templateUrl: './dropdown-module.component.html',
  styleUrls: ['./dropdown-module.component.scss']
})
export class DropdownModuleComponent implements OnInit {
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
    {
      label: 'Option 4',
      value: '4',
    },
    {
      label: 'Option 5',
      value: '5',
    },
    {
      label: 'Option 6',
      value: '6',
    },
    {
      label: 'Option 7',
      value: '7',
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
