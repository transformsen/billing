import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordionTableModuleComponent } from './accordion-table-module.component';
import { CRM_MODULES } from '../../../util/mock.util';
import { ViewboxComponent } from 'src/app/components/viewbox/viewbox.component';
import { CodeboxComponent } from 'src/app/components/codebox/codebox.component';
import { DescriptionComponent } from 'src/app/components/description/description.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
describe('AccordionTableModuleComponent', () => {
  let component: AccordionTableModuleComponent;
  let fixture: ComponentFixture<AccordionTableModuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [...CRM_MODULES],
      declarations: [ AccordionTableModuleComponent, 
        ViewboxComponent, CodeboxComponent, DescriptionComponent ],
        schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccordionTableModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
