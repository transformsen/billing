import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrmSectionContentFooterComponent } from './crm-section-content-footer.component';

describe('CrmSectionFooterComponent', () => {
  let component: CrmSectionContentFooterComponent;
  let fixture: ComponentFixture<CrmSectionContentFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrmSectionContentFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrmSectionContentFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
