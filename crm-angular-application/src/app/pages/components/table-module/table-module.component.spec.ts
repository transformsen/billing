import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableModuleComponent } from './table-module.component';
import { CRM_MODULES } from 'src/app/util/mock.util';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ViewboxComponent } from 'src/app/components/viewbox/viewbox.component';
import { DescriptionComponent } from 'src/app/components/description/description.component';
import { CodeboxComponent } from 'src/app/components/codebox/codebox.component';

describe('TableModuleComponent', () => {
  let component: TableModuleComponent;
  let fixture: ComponentFixture<TableModuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [...CRM_MODULES],
      declarations: [ TableModuleComponent, ViewboxComponent, DescriptionComponent, CodeboxComponent ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
