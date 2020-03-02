import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrmFieldTableComponent } from './crm-field-table.component';

describe('CrmFieldTableComponent', () => {
  let component: CrmFieldTableComponent;
  let fixture: ComponentFixture<CrmFieldTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrmFieldTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrmFieldTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
