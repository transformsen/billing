import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrmInputComponent } from './crm-input.component';

describe('CrmInputComponent', () => {
  let component: CrmInputComponent;
  let fixture: ComponentFixture<CrmInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrmInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrmInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
