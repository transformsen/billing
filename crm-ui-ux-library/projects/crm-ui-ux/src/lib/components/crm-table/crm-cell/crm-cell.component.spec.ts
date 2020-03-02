import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrmCellComponent } from './crm-cell.component';

describe('CrmCellComponent', () => {
  let component: CrmCellComponent;
  let fixture: ComponentFixture<CrmCellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrmCellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrmCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
