import { Pipe, PipeTransform } from '@angular/core';
import {CrmAutoTableColumn} from './crm-auto-table/crm-auto-table.component';

@Pipe({
  name: 'crmColumnIdentifier'
})
export class CrmColumnIdentifierPipe implements PipeTransform {

  /**
   * transform label to identifier
   * @param column column
   */
  transform(column: CrmAutoTableColumn): any {
    return column.label.toLowerCase().replace(/\s/g, '-');
  }

}
