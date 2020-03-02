import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BillsComponent } from './bills.component';
import { CRM_MODULES } from 'src/app/util/mock.util';
import { createBillsRows } from 'src/app/fixtures/billing.service.mock';

describe('BillsComponent', () => {
  let component: BillsComponent;
  let fixture: ComponentFixture<BillsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [...CRM_MODULES],
      declarations: [ BillsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillsComponent);
    component = fixture.componentInstance;
    component.bills = createBillsRows()
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
