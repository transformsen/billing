import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-codebox',
  templateUrl: './codebox.component.html',
  styleUrls: ['./codebox.component.scss']
})
export class CodeboxComponent implements OnInit {
  @Input() path: string;

  constructor() { }

  ngOnInit() {
  }

}
