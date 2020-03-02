import {Component, ContentChildren, EventEmitter, Input, OnChanges, OnInit, Output, QueryList, SimpleChanges} from '@angular/core';
import {CrmAccordionBodyItemDirective} from '../crm-accordion-body-item.directive';
import {CrmAccordionHeaderItemDirective} from '../crm-accordion-header-item.directive';

@Component({
  selector: 'crm-pageable-accordion-table',
  templateUrl: './crm-pageable-accordion-table.component.html',
  styleUrls: ['./crm-pageable-accordion-table.component.scss']
})
export class CrmPageableAccordionTableComponent implements OnInit, OnChanges {
  @Input() page = 0;
  @Input() size = 10;
  @Input() data: any[] = [];
  @Input() childrenProperty: string;
  @Output() pageChange: EventEmitter<number> = new EventEmitter<number>();

  @ContentChildren(CrmAccordionBodyItemDirective) public crmAccordionBodyItemDirectives: QueryList<CrmAccordionBodyItemDirective>;
  @ContentChildren(CrmAccordionHeaderItemDirective) public crmAccordionHeaderItemDirectives: QueryList<CrmAccordionHeaderItemDirective>;

  total = 0;
  hasNext = false;
  visibleData: any[] = [];

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.setTotalSizeAndHasNext();
    this.setVisibleData();
  }

  /**
   * set total size and has next state
   */
  private setTotalSizeAndHasNext() {
    this.total = this.data.length;
    this.hasNext = (this.page + 1) * this.size < this.total;
  }

  /**
   * set visible data
   */
  private setVisibleData() {
    this.visibleData = [];

    this.data.forEach((row, index) => {
      if (index < (this.page + 1) * this.size) {
        this.visibleData.push(row);
      }
    });
  }

  getNextPage() {
    this.pageChange.emit(this.page + 1);
  }
}
