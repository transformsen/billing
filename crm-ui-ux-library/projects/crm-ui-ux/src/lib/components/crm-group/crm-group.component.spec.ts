import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrmGroupComponent } from './crm-group.component';

describe('CrmGroupComponent', () => {
  let component: CrmGroupComponent;
  let fixture: ComponentFixture<CrmGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrmGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrmGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
