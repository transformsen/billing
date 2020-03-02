import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BillingNotesComponent } from './billing-notes.component';
import { CRM_MODULES } from 'src/app/util/mock.util';
import { createBillingNotesRows } from 'src/app/fixtures/billing.service.mock';

describe('BillingNotesComponent', () => {
  let component: BillingNotesComponent;
  let fixture: ComponentFixture<BillingNotesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [...CRM_MODULES],
      declarations: [ BillingNotesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillingNotesComponent);
    component = fixture.componentInstance;
    component.billingNotes = createBillingNotesRows()
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
