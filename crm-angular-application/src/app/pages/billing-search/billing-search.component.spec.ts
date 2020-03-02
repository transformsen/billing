import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BillingSearchComponent } from './billing-search.component';
import { BillingIndividualComponent } from './billing-individual/billing-individual.component';
import { BillingGroupComponent } from './billing-group/billing-group.component';
import { CRM_MODULES } from 'src/app/util/mock.util';
import { BillingService } from 'src/app/services/billing.service';
import { BillingServiceMock } from 'src/app/fixtures/billing.service.mock';
import { Router } from '@angular/router';

describe('BillingSearchComponent', () => {
  let component: BillingSearchComponent;
  let fixture: ComponentFixture<BillingSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [...CRM_MODULES],
      declarations: [ BillingSearchComponent, BillingIndividualComponent, BillingGroupComponent ],
      providers: [{provide: BillingService, useClass: BillingServiceMock},
        {provide: Router, useValue:{navigate:()=>{}}}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillingSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
