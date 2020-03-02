import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrmEllipsisContentComponent } from './crm-ellipsis-content.component';

describe('CrmEllipsisContentComponent', () => {
  let component: CrmEllipsisContentComponent;
  let fixture: ComponentFixture<CrmEllipsisContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrmEllipsisContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrmEllipsisContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
