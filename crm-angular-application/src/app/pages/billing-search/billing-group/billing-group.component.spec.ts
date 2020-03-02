import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BillingGroupComponent } from './billing-group.component';
import { CRM_MODULES } from 'src/app/util/mock.util';
import { BillingService } from 'src/app/services/billing.service';
import { BillingServiceMock } from 'src/app/fixtures/billing.service.mock';
import { ActivatedRoute, Router } from '@angular/router';
import { of } from 'rxjs';

describe('BillingGroupComponent', () => {
  let component: BillingGroupComponent;
  let fixture: ComponentFixture<BillingGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [...CRM_MODULES],
      declarations: [ BillingGroupComponent ],
      providers: [{provide: BillingService, useClass: BillingServiceMock},
        {provide: Router, useValue:{navigate:()=>{}}}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillingGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
