import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BillingContactComponent } from './billing-contact.component';
import { CRM_MODULES } from 'src/app/util/mock.util';

describe('BillingContactComponent', () => {
  let component: BillingContactComponent;
  let fixture: ComponentFixture<BillingContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [...CRM_MODULES],
      declarations: [ BillingContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillingContactComponent);
    component = fixture.componentInstance;
    component.billingContact = {
      name: 'Tim Berg',
      phone: '(123) 456-7979'
    }
    
    component.selectStates = {}
    component.selectable = true
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
