import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageHeaderModuleComponent } from './page-header-module.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('PageHeaderModuleComponent', () => {
  let component: PageHeaderModuleComponent;
  let fixture: ComponentFixture<PageHeaderModuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageHeaderModuleComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageHeaderModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
