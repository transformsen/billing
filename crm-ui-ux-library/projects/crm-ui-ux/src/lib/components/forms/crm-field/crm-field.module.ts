import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrmFieldComponent } from './crm-field.component';



@NgModule({
  declarations: [CrmFieldComponent],
  exports: [
    CrmFieldComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CrmFieldModule { }
