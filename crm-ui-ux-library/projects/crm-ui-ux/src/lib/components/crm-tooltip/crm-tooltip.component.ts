import {ChangeDetectorRef, Component, ElementRef, HostListener, Inject, Input, OnInit, ViewChild} from '@angular/core';
import {DOCUMENT} from '@angular/common';
import {PositionUtil} from '../../util/position.util';

export type CrmTooltipPosition = 'top' | 'bottom';
export type CrmTooltipTrigger = 'click' | 'hover';

@Component({
  selector: 'crm-tooltip',
  templateUrl: './crm-tooltip.component.html',
  styleUrls: ['./crm-tooltip.component.scss']
})
export class CrmTooltipComponent implements OnInit {
  @Input() theme: 'light' | 'dark' = 'light';
  @Input() size: 'large' | 'small' = 'large';
  @Input() trigger: CrmTooltipTrigger = 'hover';
  @ViewChild('tooltip', {static: false}) private tooltip: ElementRef<HTMLElement>;

  position: CrmTooltipPosition = 'top';
  hovered = false;
  clicked = false;

  constructor(
    private changeDetectorRef: ChangeDetectorRef,
    @Inject(DOCUMENT) private document,
  ) { }

  ngOnInit() {
  }

  /**
   * detect mouseenter
   */
  @HostListener('mouseenter')
  detectMouseEnter() {
    if (this.trigger === 'hover') {
      this.hovered = true;
      this.detectTooltipPosition();
    }
  }

  /**
   * detect mouseleave
   */
  @HostListener('mouseleave')
  detectMouseLeave() {
    if (this.trigger === 'hover') {
      this.hovered = false;
      this.position = 'top';
    }
  }

  @HostListener('click')
  detectClick() {
    if (this.trigger === 'click') {
      this.clicked = !this.clicked;

      if (this.clicked) {
        this.detectTooltipPosition();
      } else {
        this.position = 'top';
      }
    }
  }

  /**
   * detect tooltip position
   */
  private detectTooltipPosition() {
    this.changeDetectorRef.detectChanges();

    if (this.tooltip && this.tooltip.nativeElement) {
      this.position = PositionUtil.getAvailablePosition(this.tooltip.nativeElement, this.document.body);
    }
  }
}
