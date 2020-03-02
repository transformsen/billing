import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownModuleComponent } from './dropdown-module.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('DropdownModuleComponent', () => {
  let component: DropdownModuleComponent;
  let fixture: ComponentFixture<DropdownModuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DropdownModuleComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DropdownModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
