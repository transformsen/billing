import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrmAccordionTableComponent } from './crm-accordion-table.component';
import {CrmIconModule} from '../crm-icon/crm-icon.module';
import { CrmAccordionHeaderItemDirective } from './crm-accordion-header-item.directive';
import { CrmAccordionBodyItemDirective } from './crm-accordion-body-item.directive';
import { CrmPageableAccordionTableComponent } from './crm-pageable-accordion-table/crm-pageable-accordion-table.component';
import {CrmTableModule} from '../crm-table/crm-table.module';
import {CrmButtonModule} from '../forms/crm-button/crm-button.module';

@NgModule({
  declarations: [
    CrmAccordionTableComponent,
    CrmAccordionHeaderItemDirective,
    CrmAccordionBodyItemDirective,
    CrmPageableAccordionTableComponent,
  ],
  exports: [
    CrmAccordionTableComponent,
    CrmAccordionHeaderItemDirective,
    CrmAccordionBodyItemDirective,
    CrmPageableAccordionTableComponent,
  ],
  imports: [
    CommonModule,
    CrmIconModule,
    CrmTableModule,
    CrmButtonModule
  ]
})
export class CrmAccordionTableModule { }
