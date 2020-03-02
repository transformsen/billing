import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentBillingInfoComponent } from './current-billing-info.component';
import { CRM_MODULES } from 'src/app/util/mock.util';
import { Router } from '@angular/router';

describe('CurrentBillingInfoComponent', () => {
  let component: CurrentBillingInfoComponent;
  let fixture: ComponentFixture<CurrentBillingInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [...CRM_MODULES],
      declarations: [ CurrentBillingInfoComponent ],
      providers: [
        {provide: Router, useValue:{navigate:()=>{}}}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentBillingInfoComponent);
    component = fixture.componentInstance;
    component.currentBillinginfo = {subgroupName: 'Roy Chapman',
    subgroupId: 'W00000',
    billingAddress: '4000 East B, Des Moines Iowa, 50309',
    billingFrequency: 'Monthly',
    statementType: 'Electronic Group List by Last'}
    component.selectStates = {}
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
