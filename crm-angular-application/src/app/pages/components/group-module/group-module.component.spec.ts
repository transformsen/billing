import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupModuleComponent } from './group-module.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('GroupModuleComponent', () => {
  let component: GroupModuleComponent;
  let fixture: ComponentFixture<GroupModuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupModuleComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
