import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldModuleComponent } from './field-module.component';
import { CRM_MODULES } from 'src/app/util/mock.util';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('FieldModuleComponent', () => {
  let component: FieldModuleComponent;
  let fixture: ComponentFixture<FieldModuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [...CRM_MODULES],
      declarations: [ FieldModuleComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FieldModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
