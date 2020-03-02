import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PermiumPaidComponent } from './permium-paid.component';
import { CRM_MODULES } from 'src/app/util/mock.util';

describe('PermiumPaidComponent', () => {
  let component: PermiumPaidComponent;
  let fixture: ComponentFixture<PermiumPaidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [...CRM_MODULES],
      declarations: [ PermiumPaidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PermiumPaidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
