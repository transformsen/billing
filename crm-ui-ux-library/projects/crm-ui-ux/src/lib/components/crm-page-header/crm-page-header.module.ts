import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrmPageTitleComponent } from './crm-page-title/crm-page-title.component';
import { CrmPageSubTitleComponent } from './crm-page-sub-title/crm-page-sub-title.component';
import { CrmPageHeaderComponent } from './crm-page-header.component';
import { CrmPageTabComponent } from './crm-page-tab/crm-page-tab.component';
import { CrmPageTabItemComponent } from './crm-page-tab-item/crm-page-tab-item.component';



@NgModule({
  declarations: [CrmPageTitleComponent, CrmPageSubTitleComponent, CrmPageHeaderComponent, CrmPageTabComponent, CrmPageTabItemComponent],
  exports: [
    CrmPageHeaderComponent,
    CrmPageSubTitleComponent,
    CrmPageTitleComponent,
    CrmPageTabComponent,
    CrmPageTabItemComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class CrmPageHeaderModule { }
