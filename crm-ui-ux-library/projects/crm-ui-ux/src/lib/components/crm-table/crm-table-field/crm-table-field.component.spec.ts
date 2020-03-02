import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrmTableFieldComponent } from './crm-table-field.component';

describe('CrmTableFieldComponent', () => {
  let component: CrmTableFieldComponent;
  let fixture: ComponentFixture<CrmTableFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrmTableFieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrmTableFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
