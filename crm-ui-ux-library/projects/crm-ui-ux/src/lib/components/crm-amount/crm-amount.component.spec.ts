import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrmAmountComponent } from './crm-amount.component';

describe('CrmAmountComponent', () => {
  let component: CrmAmountComponent;
  let fixture: ComponentFixture<CrmAmountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrmAmountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrmAmountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
