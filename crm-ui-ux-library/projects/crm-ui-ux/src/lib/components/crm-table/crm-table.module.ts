import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrmTableContainerComponent } from './crm-table-container/crm-table-container.component';
import { CrmTableComponent } from './crm-table/crm-table.component';
import { CrmRowComponent } from './crm-row/crm-row.component';
import { CrmCellComponent } from './crm-cell/crm-cell.component';
import {CrmIconModule} from '../crm-icon/crm-icon.module';
import { CrmAutoTableComponent } from './crm-auto-table/crm-auto-table.component';
import { CrmCustomCellDirective } from './crm-auto-table/crm-custom-cell.directive';
import { CrmColumnDataPipe } from './crm-column-data.pipe';
import {CrmTooltipModule} from '../crm-tooltip/crm-tooltip.module';
import { CrmColgroupComponent } from './crm-colgroup/crm-colgroup.component';
import { CrmColumnIdentifierPipe } from './crm-column-identifier.pipe';
import {CrmButtonModule} from '../forms/crm-button/crm-button.module';
import { CrmTableFieldComponent } from './crm-table-field/crm-table-field.component';
import { CrmFieldModule } from '../forms/crm-field/crm-field.module';


@NgModule({
  declarations: [
    CrmTableContainerComponent,
    CrmTableComponent,
    CrmRowComponent,
    CrmCellComponent,
    CrmAutoTableComponent,
    CrmCustomCellDirective,
    CrmColumnDataPipe,
    CrmColgroupComponent,
    CrmColumnIdentifierPipe,
    CrmTableFieldComponent,
  ],
  exports: [
    CrmTableContainerComponent,
    CrmTableComponent,
    CrmRowComponent,
    CrmCellComponent,
    CrmAutoTableComponent,
    CrmCustomCellDirective,
    CrmColgroupComponent,
    CrmColumnDataPipe,
    CrmColumnIdentifierPipe,
    CrmTableFieldComponent,
  ],
  imports: [
    CommonModule,
    CrmIconModule,
    CrmTooltipModule,
    CrmButtonModule,
    CrmFieldModule,
  ]
})
export class CrmTableModule { }
