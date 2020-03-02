import {AfterContentInit, Component, ContentChildren, HostBinding, OnDestroy, OnInit, QueryList} from '@angular/core';
import {CrmFieldTableContentDirective} from './crm-field-table-content.directive';
import {Subscription} from 'rxjs';
import {SubscribeUtil} from '../../../util/subscribe.util';

@Component({
  selector: 'crm-field-table',
  templateUrl: './crm-field-table.component.html',
  styleUrls: ['./crm-field-table.component.scss']
})
export class CrmFieldTableComponent implements OnInit, OnDestroy, AfterContentInit {
  @ContentChildren(CrmFieldTableContentDirective) public crmFieldTableContentDirectives: QueryList<CrmFieldTableContentDirective>;

  @HostBinding('class.has-selectable') hasSelectable = false;

  private changeSubscription: Subscription;
  private changeEventSubscriptions: Subscription[] = [];

  constructor() { }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    SubscribeUtil.unSubscribe(this.changeSubscription);
  }

  ngAfterContentInit(): void {
    this.setHasSelectable();
    this.subscribeForChanges();
    this.subscribeForChangeEvent();
  }

  /**
   * subscribe for directive changes
   */
  private subscribeForChanges() {
    if (this.crmFieldTableContentDirectives) {
      this.changeSubscription = this.crmFieldTableContentDirectives.changes
        .subscribe(() => {
          this.setHasSelectable();
        });
    }
  }

  /**
   * subscribe for selectable state change event
   */
  private subscribeForChangeEvent() {
    if (this.crmFieldTableContentDirectives) {
      SubscribeUtil.unSubscribe(this.changeEventSubscriptions);

      this.changeEventSubscriptions = this.crmFieldTableContentDirectives.map(item => {
        return item.selectableStateChange.subscribe(() => {
          this.setHasSelectable();
        });
      });
    }
  }

  /**
   * set hasSelectable true if there are one or more selectable items
   */
  private setHasSelectable() {
    if (this.crmFieldTableContentDirectives) {
      this.hasSelectable = this.crmFieldTableContentDirectives.filter(item => item.isSelectable).length > 0;
    }
  }
}
