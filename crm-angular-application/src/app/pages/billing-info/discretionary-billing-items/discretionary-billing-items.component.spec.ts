import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscretionaryBillingItemsComponent } from './discretionary-billing-items.component';
import { CRM_MODULES } from 'src/app/util/mock.util';
import { getDiscretionaryBillingItems } from 'src/app/fixtures/billing.service.mock';

describe('DiscretionaryBillingItemsComponent', () => {
  let component: DiscretionaryBillingItemsComponent;
  let fixture: ComponentFixture<DiscretionaryBillingItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [...CRM_MODULES],
      declarations: [ DiscretionaryBillingItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscretionaryBillingItemsComponent);
    component = fixture.componentInstance;
    component.discretionaryBillingItems = getDiscretionaryBillingItems()
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
