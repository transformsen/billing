import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrmAccordionTableComponent } from './crm-accordion-table.component';

describe('CrmAccordionTableComponent', () => {
  let component: CrmAccordionTableComponent;
  let fixture: ComponentFixture<CrmAccordionTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrmAccordionTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrmAccordionTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
