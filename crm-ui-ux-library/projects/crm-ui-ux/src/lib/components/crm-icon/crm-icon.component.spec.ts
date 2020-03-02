import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrmIconComponent } from './crm-icon.component';

describe('CrmIconComponent', () => {
  let component: CrmIconComponent;
  let fixture: ComponentFixture<CrmIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrmIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrmIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
