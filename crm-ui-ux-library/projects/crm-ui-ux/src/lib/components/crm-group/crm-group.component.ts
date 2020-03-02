import {
  AfterContentInit,
  Component,
  ContentChildren,
  ElementRef,
  HostBinding,
  Input,
  OnDestroy,
  OnInit,
  QueryList,
  Renderer2
} from '@angular/core';
import {CrmGroupItemDirective} from './crm-group-item.directive';
import {Subscription} from 'rxjs';
import {SubscribeUtil} from '../../util/subscribe.util';

export type CrmGroupDirection = 'horizontal' | 'vertical';

@Component({
  selector: 'crm-group',
  templateUrl: './crm-group.component.html',
  styleUrls: ['./crm-group.component.scss']
})
export class CrmGroupComponent implements OnInit, OnDestroy, AfterContentInit {
  @Input() @HostBinding('attr.crm-group-direction') direction: CrmGroupDirection = 'horizontal';
  @Input() set gap(value: string | number) {
    this.gapBetweenChildren = value.toString() + 'px';
  }

  @ContentChildren(CrmGroupItemDirective) private crmGroupItemDirectives: QueryList<CrmGroupItemDirective>;

  gapBetweenChildren = '10px';

  private subscription: Subscription;

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2,
  ) { }

  ngOnInit() {
  }

  ngAfterContentInit(): void {
    this.setChildrenGap();
    this.subscribeForChanges();
  }

  ngOnDestroy(): void {
    SubscribeUtil.unSubscribe(this.subscription);
  }

  /**
   * subscribe for children changes
   */
  private subscribeForChanges() {
    if (this.crmGroupItemDirectives) {
      this.subscription = this.crmGroupItemDirectives.changes
        .subscribe(() => {
          this.setChildrenGap();
        });
    }
  }

  /**
   * set children gap
   */
  private setChildrenGap() {
    if (this.crmGroupItemDirectives) {
      let index = 0;

      this.crmGroupItemDirectives.forEach((item) => {
        if (
          item.elementRef
          && item.elementRef.nativeElement
          && this.elementRef.nativeElement !== item.elementRef.nativeElement
        ) {
          if (index !== 0) {
            const style = this.direction === 'horizontal' ? 'margin-left' : 'margin-top';

            this.renderer.setStyle(item.elementRef.nativeElement, style, this.gapBetweenChildren);
          }

          index++;
        }
      });
    }
  }
}
