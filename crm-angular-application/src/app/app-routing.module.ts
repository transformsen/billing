import {NgModule} from '@angular/core';
import {Route, RouterModule} from '@angular/router';
import {LandingPageComponent} from './pages/landing-page/landing-page.component';
import {BillingSearchComponent} from './pages/billing-search/billing-search.component';
import {BillingSubgroupComponent} from './pages/billing-subgroup/billing-subgroup.component';
import {BillingPremiumComponent} from './pages/billing-premium/billing-premium.component';
import {ComponentsComponent} from './pages/components/components.component';
import {SectionModuleComponent} from './pages/components/section-module/section-module.component';
import {PageHeaderModuleComponent} from './pages/components/page-header-module/page-header-module.component';
import {PageContentModuleComponent} from './pages/components/page-content-module/page-content-module.component';
import {IconModuleComponent} from './pages/components/icon-module/icon-module.component';
import {GroupModuleComponent} from './pages/components/group-module/group-module.component';
import {TooltipModuleComponent} from './pages/components/tooltip-module/tooltip-module.component';
import {InputModuleComponent} from './pages/components/input-module/input-module.component';
import {FieldModuleComponent} from './pages/components/field-module/field-module.component';
import {DropdownModuleComponent} from './pages/components/dropdown-module/dropdown-module.component';
import {ButtonModuleComponent} from './pages/components/button-module/button-module.component';
import {TableModuleComponent} from './pages/components/table-module/table-module.component';
import {FieldTableModuleComponent} from './pages/components/field-table-module/field-table-module.component';
import {EllipsisContentModuleComponent} from './pages/components/ellipsis-content-module/ellipsis-content-module.component';
import {AccordionTableModuleComponent} from './pages/components/accordion-table-module/accordion-table-module.component';

const routes: Route[] = [
  {
    path: '',
    component: BillingSearchComponent,
  },
  {
    path: 'billing-search',
    component: BillingSearchComponent,
  },
  {
    path: 'billing-subgroup/:subgroupId/:subgroupName',
    component: BillingSubgroupComponent,
  },
  {
    path: 'billing-premium/:policyId/:policyName',
    component: BillingPremiumComponent,
  },
  {
    path: 'components',
    component: ComponentsComponent,
    children: [
      {
        path: 'section-module',
        component: SectionModuleComponent,
      },
      {
        path: 'page-header-module',
        component: PageHeaderModuleComponent,
      },
      {
        path: 'page-content-module',
        component: PageContentModuleComponent,
      },
      {
        path: 'icon-module',
        component: IconModuleComponent,
      },
      {
        path: 'group-module',
        component: GroupModuleComponent,
      },
      {
        path: 'tooltip-module',
        component: TooltipModuleComponent,
      },
      {
        path: 'input-module',
        component: InputModuleComponent,
      },
      {
        path: 'field-module',
        component: FieldModuleComponent,
      },
      {
        path: 'dropdown-module',
        component: DropdownModuleComponent,
      },
      {
        path: 'button-module',
        component: ButtonModuleComponent,
      },
      {
        path: 'table-module',
        component: TableModuleComponent,
      },
      {
        path: 'field-table-module',
        component: FieldTableModuleComponent,
      },
      {
        path: 'ellipsis-content-module',
        component: EllipsisContentModuleComponent,
      },
      {
        path: 'accordion-table-module',
        component: AccordionTableModuleComponent,
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'section-module',
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule,
  ]
})
export class AppRoutingModule {

}
