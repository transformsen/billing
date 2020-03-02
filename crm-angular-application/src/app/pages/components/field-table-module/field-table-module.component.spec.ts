import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldTableModuleComponent } from './field-table-module.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CRM_MODULES } from 'src/app/util/mock.util';

describe('FieldTableModuleComponent', () => {
  let component: FieldTableModuleComponent;
  let fixture: ComponentFixture<FieldTableModuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [...CRM_MODULES],
      declarations: [ FieldTableModuleComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FieldTableModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
