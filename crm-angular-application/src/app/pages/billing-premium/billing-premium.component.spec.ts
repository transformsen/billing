import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BillingPremiumComponent } from './billing-premium.component';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('BillingPremiumComponent', () => {
  let component: BillingPremiumComponent;
  let fixture: ComponentFixture<BillingPremiumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BillingPremiumComponent ],
      providers: [{provide: ActivatedRoute, useValue:{params: of({id:''})}}],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillingPremiumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
