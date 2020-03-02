import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrmEllipsisContentComponent } from './crm-ellipsis-content.component';
import {CrmButtonModule} from '../forms/crm-button/crm-button.module';



@NgModule({
  declarations: [CrmEllipsisContentComponent],
  imports: [
    CommonModule,
    CrmButtonModule
  ],
  exports: [
    CrmEllipsisContentComponent,
  ]
})
export class CrmEllipsisContentModule { }
