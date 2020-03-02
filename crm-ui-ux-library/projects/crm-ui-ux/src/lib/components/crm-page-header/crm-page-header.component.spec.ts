import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrmPageHeaderComponent } from './crm-page-header.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('CrmPageHeaderComponent', () => {
  let component: CrmPageHeaderComponent;
  let fixture: ComponentFixture<CrmPageHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrmPageHeaderComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrmPageHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
