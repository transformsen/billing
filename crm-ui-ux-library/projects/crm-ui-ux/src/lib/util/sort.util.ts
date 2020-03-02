import {CrmAutoTableSortedColumn} from '../components/crm-table/crm-auto-table/crm-auto-table.component';
import {CrmColumnDataPipe} from '../components/crm-table/crm-column-data.pipe';
import {is} from './is.util';

const columnDataPipe = new CrmColumnDataPipe();

/**
 * sort data as ascending
 * @param a data 1
 * @param b data 2
 */
export function sortMethodAsc(a, b) {
  return a === b ? 0 : a > b ? 1 : -1;
}

/**
 * sort data with order
 * @param order sort order
 */
export function sortMethodWithOrder(order: 'asc' | 'desc') {
  if (order === undefined || order === 'asc') {
    return sortMethodAsc;
  } else {
    return (a, b) => {
      return -sortMethodAsc(a, b);
    };
  }
}

/**
 * sort data with ordered column
 * @param property property string
 * @param order sort order
 */
export function sortMethodWithOrderByColumn(property, order: 'asc' | 'desc') {
  const sortMethod = sortMethodWithOrder(order);
  return (a, b) => {
    let v1 = columnDataPipe.transform(a, property);
    let v2 = columnDataPipe.transform(b, property);

    // check exists
    v1 = v1 || '';
    v2 = v2 || '';

    // check numeric string
    v1 = (is.Float(v1)) ? parseFloat(v1) : v1;
    v2 = (is.Float(v2)) ? parseFloat(v2) : v2;

    // check formatted date
    v1 = (is.formattedDate(v1)) ? new Date(v1).getTime() : v1;
    v2 = (is.formattedDate(v2)) ? new Date(v2).getTime() : v2;

    return sortMethod(v1, v2);
  };
}

/**
 * sort data with ordered multiple columns
 * @param sortedColumns sorted column list
 */
export function sortMethodWithOrderMultiColumn(sortedColumns: CrmAutoTableSortedColumn[]) {
  const sortMethodsForColumn = (sortedColumns || []).map(item => sortMethodWithOrderByColumn(item.property, item.direction));

  return (a, b) => {
    let sorted = 0;
    let index = 0;

    while (sorted === 0 && index < sortMethodsForColumn.length) {
      sorted = sortMethodsForColumn[index++](a, b);
    }

    return sorted;
  };
}
