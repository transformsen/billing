import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvancedPremimumTaxCreditComponent } from './advanced-premimum-tax-credit.component';
import { CRM_MODULES } from 'src/app/util/mock.util';
import { getAdvancedPremimumTaxCredit } from 'src/app/fixtures/billing.service.mock';
describe('AdvancedPremimumTaxCreditComponent', () => {
  let component: AdvancedPremimumTaxCreditComponent;
  let fixture: ComponentFixture<AdvancedPremimumTaxCreditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [...CRM_MODULES],
      declarations: [ AdvancedPremimumTaxCreditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvancedPremimumTaxCreditComponent);
    component = fixture.componentInstance;
    component.advancedPremimumTaxCredit = getAdvancedPremimumTaxCredit();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
