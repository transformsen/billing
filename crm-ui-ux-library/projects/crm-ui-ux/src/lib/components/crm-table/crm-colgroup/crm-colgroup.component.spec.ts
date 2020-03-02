import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrmColgroupComponent } from './crm-colgroup.component';

describe('CrmColgroupComponent', () => {
  let component: CrmColgroupComponent;
  let fixture: ComponentFixture<CrmColgroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrmColgroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrmColgroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
