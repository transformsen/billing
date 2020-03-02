import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrmPageableAccordionTableComponent } from './crm-pageable-accordion-table.component';

describe('CrmPageableAccordionTableComponent', () => {
  let component: CrmPageableAccordionTableComponent;
  let fixture: ComponentFixture<CrmPageableAccordionTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrmPageableAccordionTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrmPageableAccordionTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
