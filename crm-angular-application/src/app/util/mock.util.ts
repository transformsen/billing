import * as moment from 'moment';
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


export function randomRange(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function pickOne(arr: any[]) {
  const i = randomRange(0, arr.length - 1);

  return arr[i];
}

export function randomDate() {
  return moment(new Date(randomRange(1548946800000, Date.now())).toISOString()).format('MM/DD/YYYY');
}


export const CRM_MODULES = [
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
]