import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BillingInfoComponent } from './billing-info.component';
import { CRM_MODULES } from 'src/app/util/mock.util';
import { BillingServiceMock } from 'src/app/fixtures/billing.service.mock';
import { BillingService } from 'src/app/services/billing.service';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('BillingInfoComponent', () => {
  let component: BillingInfoComponent;
  let fixture: ComponentFixture<BillingInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [...CRM_MODULES],
      declarations: [ BillingInfoComponent ],
      providers: [{provide: BillingService, useClass: BillingServiceMock}],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillingInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
