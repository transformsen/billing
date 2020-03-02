import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-header-module',
  templateUrl: './page-header-module.component.html',
  styleUrls: ['./page-header-module.component.scss']
})
export class PageHeaderModuleComponent implements OnInit {

  tab = 'tab-1';

  constructor() { }

  ngOnInit() {
  }

}
