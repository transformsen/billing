import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrmIconComponent } from './crm-icon.component';



@NgModule({
  declarations: [CrmIconComponent],
  exports: [
    CrmIconComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CrmIconModule { }
