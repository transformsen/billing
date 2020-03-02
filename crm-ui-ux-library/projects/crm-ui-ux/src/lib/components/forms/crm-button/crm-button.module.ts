import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrmButtonComponent } from './crm-button.component';
import {CrmIconModule} from '../../crm-icon/crm-icon.module';



@NgModule({
  declarations: [CrmButtonComponent],
  exports: [
    CrmButtonComponent
  ],
  imports: [
    CommonModule,
    CrmIconModule
  ]
})
export class CrmButtonModule { }
