import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BillingIndividualComponent } from './billing-individual.component';
import { CRM_MODULES } from 'src/app/util/mock.util';
import { BillingService } from 'src/app/services/billing.service';
import { BillingServiceMock } from 'src/app/fixtures/billing.service.mock';
import { Router } from '@angular/router';

describe('BillingIndividualComponent', () => {
  let component: BillingIndividualComponent;
  let fixture: ComponentFixture<BillingIndividualComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BillingIndividualComponent ],
      imports: [...CRM_MODULES],
      providers: [{provide: BillingService, useClass: BillingServiceMock},
        {provide: Router, useValue:{navigate:()=>{}}}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillingIndividualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
