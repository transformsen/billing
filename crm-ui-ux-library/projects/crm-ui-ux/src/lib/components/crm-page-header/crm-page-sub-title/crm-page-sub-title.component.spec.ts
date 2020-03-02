import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrmPageSubTitleComponent } from './crm-page-sub-title.component';

describe('CrmPageSubTitleComponent', () => {
  let component: CrmPageSubTitleComponent;
  let fixture: ComponentFixture<CrmPageSubTitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrmPageSubTitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrmPageSubTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
