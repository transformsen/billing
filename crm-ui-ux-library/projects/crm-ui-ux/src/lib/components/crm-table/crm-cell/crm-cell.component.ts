import {
  AfterContentInit,
  Component, ContentChild, EventEmitter,
  HostBinding,
  Input,
  OnInit, Output,
} from '@angular/core';
import {CrmIconComponent, CrmIcons} from '../../crm-icon/crm-icon.component';
import {is} from '../../../util/is.util';
import {SortChangeEvent} from '../../../models/sort-change-event';

export type CrmCellSortDirection = 'asc' | 'desc' | '';
export type CrmCellAlign = 'start' | 'end' | 'center' | 'space';

@Component({
  selector: 'crm-cell',
  templateUrl: './crm-cell.component.html',
  styleUrls: ['./crm-cell.component.scss']
})
export class CrmCellComponent implements OnInit, AfterContentInit {
  @Input() property: string;
  @Input() @HostBinding('attr.crm-cell-align') align: CrmCellAlign = 'start';
  @Input() set sortable(value) {
    this.useSort = is.Exists(value) && value !== false;
  }

  @Input() set filterable(value) {
    this.useFilter = is.Exists(value) && value !== false;
  }

  @Output() sortChange: EventEmitter<SortChangeEvent> = new EventEmitter<SortChangeEvent>();

  @ContentChild(CrmIconComponent, {static: false}) private crmIconComponent: CrmIconComponent;

  @HostBinding('class.use-icon') useIcon = false;
  @HostBinding('class.use-sort') useSort = false;
  @HostBinding('class.use-filter') useFilter = false;

  sortDirection: CrmCellSortDirection = '';

  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit(): void {
    this.detectIcon();
  }

  /**
   * detect icon
   */
  detectIcon() {
    if (this.crmIconComponent) {
      this.useIcon = true;
    }
  }

  /**
   * return sort icon by direction
   */
  getSortIcon(): CrmIcons {
    if (this.sortDirection === 'asc') {
      return 'sort-up';
    } else {
      return 'sort-down';
    }
  }

  /**
   * only available when `useSort` is true
   */
  changeSortDirection() {
    if (this.useSort) {
      if (this.sortDirection === 'asc') {
        this.sortDirection = 'desc';
      } else if (this.sortDirection === 'desc') {
        this.sortDirection = '';
      } else {
        this.sortDirection = 'asc';
      }

      this.sortChange.emit({direction: this.sortDirection});
    }
  }
}
