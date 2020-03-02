import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrmGroupComponent } from './crm-group.component';
import { CrmGroupItemDirective } from './crm-group-item.directive';

@NgModule({
  declarations: [CrmGroupComponent, CrmGroupItemDirective],
  exports: [
    CrmGroupComponent,
    CrmGroupItemDirective
  ],
  imports: [
    CommonModule
  ]
})
export class CrmGroupModule { }
