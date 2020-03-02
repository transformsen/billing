import {
  AfterContentInit,
  Component,
  ContentChildren, EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  QueryList,
  SimpleChanges
} from '@angular/core';
import {CrmPageTabItemComponent} from '../crm-page-tab-item/crm-page-tab-item.component';
import {Subscription} from 'rxjs';
import {SubscribeUtil} from '../../../util/subscribe.util';

@Component({
  selector: 'crm-page-tab',
  templateUrl: './crm-page-tab.component.html',
  styleUrls: ['./crm-page-tab.component.scss']
})
export class CrmPageTabComponent implements OnInit, OnDestroy, OnChanges, AfterContentInit {
  @Input() value: string;
  @Output() valueChange: EventEmitter<string> = new EventEmitter<string>();
  @ContentChildren(CrmPageTabItemComponent) private crmPageTabItemComponents: QueryList<CrmPageTabItemComponent>;

  private changeSubscription: Subscription;
  private clickSubscriptions: Subscription[] = [];

  constructor() { }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    SubscribeUtil.unSubscribe(this.changeSubscription);
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.setTabSelectedState();
  }

  ngAfterContentInit(): void {
    this.setTabSelectedState();
    this.subscribeForClick();
    this.subscribeForChanges();
  }

  /**
   * subscribe for changes
   */
  private subscribeForChanges() {
    if (this.crmPageTabItemComponents) {
      this.changeSubscription = this.crmPageTabItemComponents.changes
        .subscribe(() => {
          this.subscribeForClick();
        });
    }
  }

  /**
   * subscribe for click
   */
  private subscribeForClick() {
    if (this.crmPageTabItemComponents) {
      SubscribeUtil.unSubscribe(this.clickSubscriptions);

      this.clickSubscriptions = this.crmPageTabItemComponents.map(item => {
        return item.tabClicked.subscribe((value: string) => {
          this.valueChange.emit(value);
        });
      });
    }
  }

  /**
   * set tab selected state by value
   */
  private setTabSelectedState() {
    if (this.crmPageTabItemComponents) {
      this.crmPageTabItemComponents.forEach(item => {
        item.active = item.value === this.value;
      });
    }
  }
}
