import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeboxComponent } from './codebox.component';
import { CRM_MODULES } from 'src/app/util/mock.util';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('CodeboxComponent', () => {
  let component: CodeboxComponent;
  let fixture: ComponentFixture<CodeboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [...CRM_MODULES],
      declarations: [ CodeboxComponent ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
