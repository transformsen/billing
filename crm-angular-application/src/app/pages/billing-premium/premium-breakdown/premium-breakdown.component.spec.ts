import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PremiumBreakdownComponent } from './premium-breakdown.component';
import { BillingServiceMock } from 'src/app/fixtures/billing.service.mock';
import { BillingService } from 'src/app/services/billing.service';
import { CRM_MODULES } from 'src/app/util/mock.util';

describe('PremiumBreakdownComponent', () => {
  let component: PremiumBreakdownComponent;
  let fixture: ComponentFixture<PremiumBreakdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [...CRM_MODULES],
      declarations: [ PremiumBreakdownComponent ],      
      providers: [{provide: BillingService, useClass: BillingServiceMock}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PremiumBreakdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
