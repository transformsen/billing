import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrmAmountComponent } from './crm-amount.component';

@NgModule({
  declarations: [CrmAmountComponent],
  imports: [
    CommonModule
  ],
  exports: [
    CrmAmountComponent,
  ]
})
export class CrmAmountModule { }
