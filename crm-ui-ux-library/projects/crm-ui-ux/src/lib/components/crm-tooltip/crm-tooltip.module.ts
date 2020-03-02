import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrmTooltipComponent } from './crm-tooltip.component';
import { CrmTooltipContentDirective } from './crm-tooltip-content.directive';

@NgModule({
  declarations: [CrmTooltipComponent, CrmTooltipContentDirective],
  exports: [
    CrmTooltipComponent,
    CrmTooltipContentDirective
  ],
  imports: [
    CommonModule
  ]
})
export class CrmTooltipModule { }
