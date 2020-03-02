import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrmSectionContentComponent } from './crm-section-content.component';

describe('CrmSectionContentComponent', () => {
  let component: CrmSectionContentComponent;
  let fixture: ComponentFixture<CrmSectionContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrmSectionContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrmSectionContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
