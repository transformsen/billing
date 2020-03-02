import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrmPageContentComponent } from './crm-page-content.component';

@NgModule({
  declarations: [CrmPageContentComponent],
  imports: [
    CommonModule
  ],
  exports: [
    CrmPageContentComponent,
  ]
})
export class CrmPageContentModule { }
