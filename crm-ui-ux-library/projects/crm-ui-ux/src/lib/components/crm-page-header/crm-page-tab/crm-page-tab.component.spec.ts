import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrmPageTabComponent } from './crm-page-tab.component';

describe('CrmPageTabComponent', () => {
  let component: CrmPageTabComponent;
  let fixture: ComponentFixture<CrmPageTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrmPageTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrmPageTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
