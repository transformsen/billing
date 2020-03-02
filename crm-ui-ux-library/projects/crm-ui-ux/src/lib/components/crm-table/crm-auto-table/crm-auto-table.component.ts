import {
  Component,
  ContentChild,
  ContentChildren,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  QueryList,
  SimpleChanges, ViewChild, ViewChildren
} from '@angular/core';
import {CrmCustomCellDirective} from './crm-custom-cell.directive';
import {is} from '../../../util/is.util';
import {CrmColgroupComponent} from '../crm-colgroup/crm-colgroup.component';
import {CrmCellAlign, CrmCellComponent} from '../crm-cell/crm-cell.component';
import {sortMethodWithOrderByColumn} from '../../../util/sort.util';
import {SortChangeEvent} from '../../../models/sort-change-event';

export type CrmAutoTableAvailableSortDirection = 'asc' | 'desc';
export interface CrmAutoTableColumn {
  label: string;
  property: string;
  useFilter?: boolean;
  useSort?: boolean;
  useCustomCell?: boolean;
  align?: CrmCellAlign;
}
export interface CrmAutoTableField {
  label: string;
  value: string;
}

export interface CrmAutoTableSortedColumn {
  property: string;
  direction: CrmAutoTableAvailableSortDirection;
}

@Component({
  selector: 'crm-auto-table',
  templateUrl: './crm-auto-table.component.html',
  styleUrls: ['./crm-auto-table.component.scss']
})
export class CrmAutoTableComponent implements OnInit, OnChanges {
  @Input() tableField: CrmAutoTableField;
  @Input() rows: any[] = [];
  @Input() columns: CrmAutoTableColumn[] = [];
  @Input() page = 0;
  @Input() size = 10;
  @Input() set selectable(value) {
    this.useSelecting = is.Exists(value) && value !== false;
  }

  @Input() set pageable(value) {
    this.usePagination = is.Exists(value) && value !== false;
  }

  @Output() pageChange: EventEmitter<number> = new EventEmitter<number>();
  @Output() rowSelected: EventEmitter<any> = new EventEmitter<any>();
  @Output() selectedRowsChange: EventEmitter<any[]> = new EventEmitter<any[]>();
  @Output() tableFieldSelected: EventEmitter<boolean> = new EventEmitter();

  @ViewChild(CrmColgroupComponent, {static: false}) private viewColgroup: CrmColgroupComponent;
  @ViewChildren('headerCellComponent') private headerCellComponents: QueryList<CrmCellComponent>;
  @ContentChild(CrmColgroupComponent, {static: false}) private contentColgroup: CrmColgroupComponent;
  @ContentChildren(CrmCustomCellDirective) private crmCustomCellDirectives: QueryList<CrmCustomCellDirective>;

  total = 0;
  hasNext = false;
  usePagination = false;
  useSelecting = false;
  selectedRows: any[] = [];
  visibleRows: any[] = [];
  sortedColumn: CrmAutoTableSortedColumn;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.adjustColumns();
    this.setTotalSizeAndHasNext();
    this.setVisibleRows();
  }

  /**
   * get custom cell directive by property
   * @param property property
   */
  getCustomCellDirective(property: string) {
    if (this.crmCustomCellDirectives) {
      return this.crmCustomCellDirectives.find(item => item.property === property);
    }
  }

  /**
   * adjust column fields
   * set false for `useFilter`, `useSort`, `useCustomCell` when value is not set
   */
  private adjustColumns() {
    this.columns.forEach(column => {
      column.useSort = column.useSort || false;
      column.useFilter = column.useFilter || false;
      column.useCustomCell = column.useCustomCell || false;
    });
  }

  /**
   * select/unselect row
   * @param row row
   */
  selectRow(row: any) {
    const i = this.getSelectedRowIndex(row);

    if (i === -1) {
      this.selectedRows.push(row);
    }

    this.rowSelected.emit(row);
    this.selectedRowsChange.emit(this.selectedRows);
  }

  /**
   * return true when row is selected
   * @param row row
   */
  isSelectedRow(row: any) {
    return this.getSelectedRowIndex(row) !== -1;
  }

  /**
   * return index of selected row
   * @param row row
   */
  getSelectedRowIndex(row: any) {
    return this.selectedRows.indexOf(row);
  }

  /**
   * set total size and has next state
   */
  private setTotalSizeAndHasNext() {
    this.total = this.rows.length;
    this.hasNext = (this.page + 1) * this.size < this.total;
  }

  /**
   * set visible rows
   */
  private setVisibleRows() {
    this.visibleRows = [];

    if (!this.usePagination) {
      this.visibleRows = this.sortRows();
    } else {
      this.sortRows().forEach((row, index) => {
        if (index < (this.page + 1) * this.size) {
          this.visibleRows.push(row);
        }
      });
    }
  }

  /**
   * sort row
   */
  private sortRows() {
    if (this.sortedColumn) {
      return [...this.rows].sort(sortMethodWithOrderByColumn(this.sortedColumn.property, this.sortedColumn.direction));
    } else {
      return this.rows;
    }
  }

  getNextPage() {
    this.pageChange.emit(this.page + 1);
  }

  selectTableField(value) {
    this.tableFieldSelected.emit(value);
  }

  /**
   * handle sort change event
   * @param event sort change event
   * @param column column
   */
  onSortChange(event: SortChangeEvent, column: CrmAutoTableColumn) {
    this.unsetAllNonTargetedSortDirection(column);
    this.sortedColumn = null;

    if (event.direction !== '') {
      this.sortedColumn = {
        direction: event.direction,
        property: column.property,
      };

      this.setVisibleRows();
    }
  }

  /**
   * unset all non-targeted header cells sort direction
   * @param column target column
   */
  private unsetAllNonTargetedSortDirection(column: CrmAutoTableColumn) {
    if (this.sortedColumn && this.sortedColumn.property !== column.property) {
      if (this.headerCellComponents) {
        this.headerCellComponents.forEach(item => {
          if (item.property !== column.property) {
            item.sortDirection = '';
          }
        });
      }
    }
  }
}
