import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrmInputComponent } from './crm-input.component';

@NgModule({
  declarations: [
    CrmInputComponent,
  ],
  exports: [
    CrmInputComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CrmInputModule { }
