import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrmRowComponent } from './crm-row.component';

describe('CrmRowComponent', () => {
  let component: CrmRowComponent;
  let fixture: ComponentFixture<CrmRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrmRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrmRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
