import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentBillingStatusComponent } from './current-billing-status.component';
import { CRM_MODULES } from 'src/app/util/mock.util';

describe('CurrentBillingStatusComponent', () => {
  let component: CurrentBillingStatusComponent;
  let fixture: ComponentFixture<CurrentBillingStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [...CRM_MODULES],
      declarations: [ CurrentBillingStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentBillingStatusComponent);
    component = fixture.componentInstance;
    component.currentBillingStatus = { suspendedBilling: 'Bill as Normal',
    netAmountDue: '$1,000.00',
    currentSuspense: '$0.00',
    potentialLateFeeAmount: '12/31/2019',
    eligibilityThroughDate: '12/31/2019'}
    component.selectStates = {}
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
