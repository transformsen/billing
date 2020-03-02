import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import {AppRoutingModule} from './app-routing.module';
import { BillingSearchComponent } from './pages/billing-search/billing-search.component';
import {
  CrmButtonModule,
  CrmFieldModule,
  CrmInputModule,
  CrmPageHeaderModule,
  CrmSectionModule,
  CrmTableModule,
  CrmGroupModule,
  CrmPageContentModule,
  CrmFieldTableModule, 
  CrmEllipsisContentModule, 
  CrmTooltipModule, 
  CrmIconModule, CrmAccordionTableModule, CrmDropdownModule, CrmAmountModule
} from 'crm-ui-ux';
import {LogComponent} from './components/log/log.component';
import { LogItemComponent } from './components/log-item/log-item.component';
import { BillingSubgroupComponent } from './pages/billing-subgroup/billing-subgroup.component';
import { BillingPremiumComponent } from './pages/billing-premium/billing-premium.component';
import { ComponentsComponent } from './pages/components/components.component';
import { DescriptionComponent } from './components/description/description.component';
import { ViewboxComponent } from './components/viewbox/viewbox.component';
import { CodeboxComponent } from './components/codebox/codebox.component';
import {MarkdownModule} from 'ngx-markdown';
import { SectionModuleComponent } from './pages/components/section-module/section-module.component';
import {HttpClientModule} from '@angular/common/http';
import { PageHeaderModuleComponent } from './pages/components/page-header-module/page-header-module.component';
import { PageContentModuleComponent } from './pages/components/page-content-module/page-content-module.component';
import { IconModuleComponent } from './pages/components/icon-module/icon-module.component';
import { GroupModuleComponent } from './pages/components/group-module/group-module.component';
import { TooltipModuleComponent } from './pages/components/tooltip-module/tooltip-module.component';
import { InputModuleComponent } from './pages/components/input-module/input-module.component';
import { FieldModuleComponent } from './pages/components/field-module/field-module.component';
import { DropdownModuleComponent } from './pages/components/dropdown-module/dropdown-module.component';
import { ButtonModuleComponent } from './pages/components/button-module/button-module.component';
import { TableModuleComponent } from './pages/components/table-module/table-module.component';
import { FieldTableModuleComponent } from './pages/components/field-table-module/field-table-module.component';
import { EllipsisContentModuleComponent } from './pages/components/ellipsis-content-module/ellipsis-content-module.component';
import { AccordionTableModuleComponent } from './pages/components/accordion-table-module/accordion-table-module.component';
import { BillingIndividualComponent } from './pages/billing-search/billing-individual/billing-individual.component';
import { BillingGroupComponent } from './pages/billing-search/billing-group/billing-group.component';
import { BillingInfoComponent } from './pages/billing-premium/billing-info/billing-info.component';
import { CurrentBillingInfoComponent } from './pages/billing-info/current-billing-info/current-billing-info.component';
import { CurrentBillingStatusComponent } from './pages/billing-info/current-billing-status/current-billing-status.component';
import { BillingContactComponent } from './pages/billing-info/billing-contact/billing-contact.component';
import { BillingNotesComponent } from './pages/billing-info/billing-notes/billing-notes.component';
import { BillsComponent } from './pages/billing-info/bills/bills.component';
import { PaymentsComponent } from './pages/billing-info/payments/payments.component';
import { PermiumPaidComponent } from './pages/billing-info/permium-paid/permium-paid.component';
import { DelinquencyCorrespondenceComponent } from './pages/billing-info/delinquency-correspondence/delinquency-correspondence.component';
import { AdvancedPremimumTaxCreditComponent } from './pages/billing-info/advanced-premimum-tax-credit/advanced-premimum-tax-credit.component';
import { DiscretionaryBillingItemsComponent } from './pages/billing-info/discretionary-billing-items/discretionary-billing-items.component';
import { PremiumBreakdownComponent } from './pages/billing-premium/premium-breakdown/premium-breakdown.component';
import { BillingService } from './services/billing.service';
import { BillingServiceMock } from './fixtures/billing.service.mock';

@NgModule({
  declarations: [
    AppComponent,
    LogComponent,
    LandingPageComponent,
    BillingSearchComponent,
    LogItemComponent,
    BillingSubgroupComponent,
    BillingPremiumComponent,
    ComponentsComponent,
    DescriptionComponent,
    ViewboxComponent,
    CodeboxComponent,
    SectionModuleComponent,
    PageHeaderModuleComponent,
    PageContentModuleComponent,
    IconModuleComponent,
    GroupModuleComponent,
    TooltipModuleComponent,
    InputModuleComponent,
    FieldModuleComponent,
    DropdownModuleComponent,
    ButtonModuleComponent,
    TableModuleComponent,
    FieldTableModuleComponent,
    EllipsisContentModuleComponent,
    AccordionTableModuleComponent,
    BillingIndividualComponent,
    BillingGroupComponent,
    BillingInfoComponent,
    CurrentBillingInfoComponent,
    CurrentBillingStatusComponent,
    BillingContactComponent,
    BillingNotesComponent,
    BillsComponent,
    PaymentsComponent,
    PermiumPaidComponent,
    DelinquencyCorrespondenceComponent,
    AdvancedPremimumTaxCreditComponent,
    DiscretionaryBillingItemsComponent,
    PremiumBreakdownComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CrmButtonModule,
    CrmPageHeaderModule,
    CrmGroupModule,
    CrmFieldModule,
    CrmInputModule,
    CrmSectionModule,
    CrmTableModule,
    CrmPageContentModule,
    CrmFieldTableModule,
    CrmEllipsisContentModule,
    CrmTooltipModule,
    CrmIconModule,
    CrmAccordionTableModule,
    CrmDropdownModule,
    HttpClientModule,
    MarkdownModule.forRoot(),
    CrmAmountModule,
  ],
  //providers: [], //BillingService has been mocked at below line. For real API. uncomment thisline and comment below line.
  providers: [{provide: BillingService, useClass: BillingServiceMock}],
  bootstrap: [AppComponent]
})
export class AppModule { }
