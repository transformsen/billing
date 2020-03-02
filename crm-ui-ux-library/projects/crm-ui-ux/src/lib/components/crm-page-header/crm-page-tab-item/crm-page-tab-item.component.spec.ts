import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrmPageTabItemComponent } from './crm-page-tab-item.component';

describe('CrmPageTabItemComponent', () => {
  let component: CrmPageTabItemComponent;
  let fixture: ComponentFixture<CrmPageTabItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrmPageTabItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrmPageTabItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
