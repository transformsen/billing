import { NgModule } from '@angular/core';
import {CrmAccordionTableModule} from './components/crm-accordion-table/crm-accordion-table.module';
import {CrmGroupModule} from './components/crm-group/crm-group.module';
import {CrmIconModule} from './components/crm-icon/crm-icon.module';
import {CrmPageHeaderModule} from './components/crm-page-header/crm-page-header.module';
import {CrmPageContentModule} from './components/crm-page-content/crm-page-content.module';
import {CrmSectionModule} from './components/crm-section/crm-section.module';
import {CrmTableModule} from './components/crm-table/crm-table.module';
import {CrmTooltipModule} from './components/crm-tooltip/crm-tooltip.module';
import {CrmButtonModule} from './components/forms/crm-button/crm-button.module';
import {CrmDropdownModule} from './components/forms/crm-dropdown/crm-dropdown.module';
import {CrmFieldModule} from './components/forms/crm-field/crm-field.module';
import {CrmInputModule} from './components/forms/crm-input/crm-input.module';
import {CrmFieldTableModule} from './components/forms/crm-field-table/crm-field-table.module';
import {CrmEllipsisContentModule} from './components/crm-ellipsis-content/crm-ellipsis-content.module';
import {CrmAmountModule} from './components/crm-amount/crm-amount.module';

const modules = [
  CrmAccordionTableModule,
  CrmGroupModule,
  CrmIconModule,
  CrmPageHeaderModule,
  CrmPageContentModule,
  CrmSectionModule,
  CrmTableModule,
  CrmTooltipModule,
  CrmButtonModule,
  CrmDropdownModule,
  CrmFieldModule,
  CrmInputModule,
  CrmFieldTableModule,
  CrmEllipsisContentModule,
  CrmAmountModule,
];

@NgModule({
  declarations: [],
  imports: [
    ...modules,
  ],
  exports: [
    ...modules,
  ]
})
export class CrmUiUxModule { }
