import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrmFieldTableComponent } from './crm-field-table.component';
import {CrmFieldTableContentDirective} from './crm-field-table-content.directive';
import {CrmIconModule} from '../../crm-icon/crm-icon.module';



@NgModule({
  declarations: [CrmFieldTableComponent, CrmFieldTableContentDirective],
  imports: [
    CommonModule,
    CrmIconModule,
  ],
  exports: [
    CrmFieldTableComponent,
    CrmFieldTableContentDirective,
  ]
})
export class CrmFieldTableModule { }
