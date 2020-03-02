import {Component, ContentChildren, EventEmitter, HostBinding, Input, OnInit, Output, QueryList} from '@angular/core';
import {CrmAccordionHeaderItemDirective} from './crm-accordion-header-item.directive';
import {CrmAccordionBodyItemDirective} from './crm-accordion-body-item.directive';
import {is} from '../../util/is.util';

export type CrmAccordionCellHorizontalAlign = 'start' | 'end' | 'center' | 'space';
export type CrmAccordionCellVerticalAlign = 'top' | 'middle' | 'bottom';

@Component({
  selector: 'crm-accordion-table',
  templateUrl: './crm-accordion-table.component.html',
  styleUrls: ['./crm-accordion-table.component.scss']
})
export class CrmAccordionTableComponent implements OnInit {
  @Input() rows: any[] = [];
  @Input() set useBorderTop(value) {
    this.setBorderTop = is.Exists(value) && value !== false;
  }

  @Input() set useBorderBottom(value) {
    this.setBorderBottom = is.Exists(value) && value !== false;
  }

  @Output() rowSelected: EventEmitter<any> = new EventEmitter<any>();
  @Output() selectedRowsChange: EventEmitter<any[]> = new EventEmitter<any[]>();
  @ContentChildren(CrmAccordionBodyItemDirective, {descendants: true})
  public crmAccordionBodyItemDirectives: QueryList<CrmAccordionBodyItemDirective>;

  @ContentChildren(CrmAccordionHeaderItemDirective, {descendants: true})
  public crmAccordionHeaderItemDirectives: QueryList<CrmAccordionHeaderItemDirective>;

  @HostBinding('class.opened') opened = false;
  @HostBinding('class.border-top') setBorderTop = false;
  @HostBinding('class.border-bottom') setBorderBottom = false;

  selected = false;
  selectedRows: any[] = [];

  constructor() { }

  ngOnInit() {
  }

  /**
   * select table
   */
  selectTable() {
    this.selected = true;
    this.selectedRows = [...this.rows];
    this.selectedRowsChange.emit(this.selectedRows);
  }

  /**
   * select row
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
   * get selected row index
   * @param row row
   */
  getSelectedRowIndex(row: any) {
    return this.selectedRows.indexOf(row);
  }

  /**
   * get body directive
   * @param identifier identifier
   */
  getBodyDirective(identifier: string) {
    if (this.crmAccordionBodyItemDirectives) {
      return this.crmAccordionBodyItemDirectives.find(item => item.identifier === identifier);
    }
  }
}
