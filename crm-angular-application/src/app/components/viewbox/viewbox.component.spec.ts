import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewboxComponent } from './viewbox.component';
import { CRM_MODULES } from 'src/app/util/mock.util';

describe('ViewboxComponent', () => {
  let component: ViewboxComponent;
  let fixture: ComponentFixture<ViewboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [...CRM_MODULES],
      declarations: [ ViewboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
