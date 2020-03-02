import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BillingSubgroupComponent } from './billing-subgroup.component';
import { CRM_MODULES } from 'src/app/util/mock.util';
import { BillingService } from 'src/app/services/billing.service';
import { BillingServiceMock } from 'src/app/fixtures/billing.service.mock';
import { of } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('BillingSubgroupComponent', () => {
  let component: BillingSubgroupComponent;
  let fixture: ComponentFixture<BillingSubgroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [...CRM_MODULES],
      declarations: [ BillingSubgroupComponent ],
      providers: [{provide: BillingService, useClass: BillingServiceMock},
        {provide: ActivatedRoute, useValue:{params: of({id:''})}}],
        schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillingSubgroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
