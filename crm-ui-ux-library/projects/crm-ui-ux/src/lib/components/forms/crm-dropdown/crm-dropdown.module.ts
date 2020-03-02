import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrmDropdownComponent } from './crm-dropdown.component';
import {CrmIconModule} from '../../crm-icon/crm-icon.module';



@NgModule({
  declarations: [CrmDropdownComponent],
  exports: [
    CrmDropdownComponent
  ],
  imports: [
    CommonModule,
    CrmIconModule
  ]
})
export class CrmDropdownModule { }
