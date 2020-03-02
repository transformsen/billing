import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrmSectionComponent } from './crm-section.component';
import { CrmSectionHeaderComponent } from './crm-section-header/crm-section-header.component';
import { CrmSectionContentComponent } from './crm-section-content/crm-section-content.component';
import { CrmSectionContentFooterComponent } from './crm-section-content-footer/crm-section-content-footer.component';



@NgModule({
  declarations: [CrmSectionComponent, CrmSectionHeaderComponent, CrmSectionContentComponent, CrmSectionContentFooterComponent],
  exports: [
    CrmSectionComponent,
    CrmSectionHeaderComponent,
    CrmSectionContentComponent,
    CrmSectionContentFooterComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CrmSectionModule { }
