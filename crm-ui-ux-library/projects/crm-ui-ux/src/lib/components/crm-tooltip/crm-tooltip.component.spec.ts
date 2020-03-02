import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrmTooltipComponent } from './crm-tooltip.component';

describe('CrmTooltipComponent', () => {
  let component: CrmTooltipComponent;
  let fixture: ComponentFixture<CrmTooltipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrmTooltipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrmTooltipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
