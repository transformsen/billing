import {AfterContentInit, ChangeDetectorRef, Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {to} from '../../util/to.util';

export const SUFFIX_SPACE = '          ';
export const SUFFIX_ELLIPSIS = '...';

@Component({
  selector: 'crm-ellipsis-content',
  templateUrl: './crm-ellipsis-content.component.html',
  styleUrls: ['./crm-ellipsis-content.component.scss']
})
export class CrmEllipsisContentComponent implements OnInit, AfterContentInit {
  @Input() content: string;
  @Input() set maxLine(value: string | number) {
    this.availableHeight = to.Float(value) * this.lineHeight;
  }

  @ViewChild('contentElement', {static: false}) private contentElement: ElementRef<HTMLElement>;

  lineHeight = 19;
  availableHeight = 0;
  visibleContent: string;
  overflowed = false;
  expanded = false;

  constructor(
    private changeDetectorRef: ChangeDetectorRef,
  ) { }

  ngOnInit() {
  }

  ngAfterContentInit(): void {
    this.visibleContent = this.content;
    this.setEllipsis();
  }

  /**
   * set ellipsis to content
   */
  setEllipsis() {
    this.expanded = false;
    this.changeDetectorRef.detectChanges();

    if (this.contentElement && this.contentElement.nativeElement) {
      const el = this.contentElement.nativeElement;
      const diff = el.offsetHeight - this.availableHeight;

      if (diff > 0) {
        this.overflowed = true;
        this.visibleContent = this.visibleContent
          .substr(0, this.visibleContent.length - ((diff > this.availableHeight * 3) ? 10 : 2));

        this.setEllipsis();
      } else if (this.overflowed) {
        this.visibleContent = this.visibleContent.substr(0, this.visibleContent.length - SUFFIX_SPACE.length) + SUFFIX_ELLIPSIS;
      }
    }
  }

  /**
   * expand visible content
   */
  expandVisibleContent() {
    this.expanded = true;
    this.visibleContent = this.content + SUFFIX_SPACE;
  }
}
