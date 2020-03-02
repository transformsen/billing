import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrmPageTitleComponent } from './crm-page-title.component';

describe('CrmPageTitleComponent', () => {
  let component: CrmPageTitleComponent;
  let fixture: ComponentFixture<CrmPageTitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrmPageTitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrmPageTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
