import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrmTableContainerComponent } from './crm-table-container.component';

describe('CrmTableContainerComponent', () => {
  let component: CrmTableContainerComponent;
  let fixture: ComponentFixture<CrmTableContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrmTableContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrmTableContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
