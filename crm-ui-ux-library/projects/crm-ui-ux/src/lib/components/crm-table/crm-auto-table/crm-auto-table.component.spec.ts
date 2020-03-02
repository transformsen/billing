import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrmAutoTableComponent } from './crm-auto-table.component';

describe('CrmAutoTableComponent', () => {
  let component: CrmAutoTableComponent;
  let fixture: ComponentFixture<CrmAutoTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrmAutoTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrmAutoTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
