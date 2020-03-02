import { Component, OnInit } from '@angular/core';
import {CrmDropdownOption} from 'crm-ui-ux';
import {Router} from '@angular/router';

@Component({
  selector: 'app-components',
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.scss']
})
export class ComponentsComponent implements OnInit {
  value = '';

  options: CrmDropdownOption[] = [
    {
      label: 'CrmSectionModule',
      value: 'section-module',
    },
    {
      label: 'CrmPageHeaderModule',
      value: 'page-header-module',
    },
    {
      label: 'CrmPageContentModule',
      value: 'page-content-module',
    },
    {
      label: 'CrmIconModule',
      value: 'icon-module',
    },
    {
      label: 'CrmGroupModule',
      value: 'group-module',
    },
    {
      label: 'CrmTooltipModule',
      value: 'tooltip-module',
    },
    {
      label: 'CrmInputModule',
      value: 'input-module',
    },
    {
      label: 'CrmFieldModule',
      value: 'field-module',
    },
    {
      label: 'CrmDropdownModule',
      value: 'dropdown-module',
    },
    {
      label: 'CrmButtonModule',
      value: 'button-module',
    },
    {
      label: 'CrmTableModule',
      value: 'table-module',
    },
    {
      label: 'CrmFieldTableModule',
      value: 'field-table-module',
    },
    {
      label: 'CrmEllipsisContentModule',
      value: 'ellipsis-content-module',
    },
    {
      label: 'CrmAccordionTableModule',
      value: 'accordion-table-module',
    },
  ];

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
  }

  navigate(path: string) {
    this.router.navigate([`/components/${path}`]);
  }
}
