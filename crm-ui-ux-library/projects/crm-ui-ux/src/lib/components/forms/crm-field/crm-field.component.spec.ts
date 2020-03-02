import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrmFieldComponent } from './crm-field.component';

describe('CrmFieldComponent', () => {
  let component: CrmFieldComponent;
  let fixture: ComponentFixture<CrmFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrmFieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrmFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
