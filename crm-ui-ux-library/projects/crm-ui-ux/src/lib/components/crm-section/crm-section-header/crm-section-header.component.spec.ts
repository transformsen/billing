import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrmSectionHeaderComponent } from './crm-section-header.component';

describe('CrmSectionHeaderComponent', () => {
  let component: CrmSectionHeaderComponent;
  let fixture: ComponentFixture<CrmSectionHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrmSectionHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrmSectionHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
