import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'crm-table-field',
  templateUrl: './crm-table-field.component.html',
  styleUrls: ['./crm-table-field.component.scss'],
  host: {
    '[class.selected]': 'selected'
  }
})
export class CrmTableFieldComponent implements OnInit {
  @Input() label: string;
  @Input() value: string;
  @Input() selected = false;
  @Output() onSelected = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  select() {
    if (!this.selected) {
      this.selected = true;
      this.onSelected.emit(this.selected);
    }
  }
}
