import {Component, EventEmitter, HostBinding, HostListener, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'crm-page-tab-item',
  templateUrl: './crm-page-tab-item.component.html',
  styleUrls: ['./crm-page-tab-item.component.scss']
})
export class CrmPageTabItemComponent implements OnInit {
  @Input() value: string;
  @Output() tabClicked: EventEmitter<string> = new EventEmitter<string>();

  @HostBinding('class.active') active = false;

  constructor() { }

  ngOnInit() {
  }

  @HostListener('click')
  detectClick() {
    this.tabClicked.emit(this.value);
  }
}
