import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrmPageContentComponent } from './crm-page-content.component';

describe('CrmPageContentComponent', () => {
  let component: CrmPageContentComponent;
  let fixture: ComponentFixture<CrmPageContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrmPageContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrmPageContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
