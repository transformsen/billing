import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EllipsisContentModuleComponent } from './ellipsis-content-module.component';
import { CRM_MODULES } from 'src/app/util/mock.util';
import { ViewboxComponent } from 'src/app/components/viewbox/viewbox.component';
import { CodeboxComponent } from 'src/app/components/codebox/codebox.component';
import { DescriptionComponent } from 'src/app/components/description/description.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('EllipsisContentModuleComponent', () => {
  let component: EllipsisContentModuleComponent;
  let fixture: ComponentFixture<EllipsisContentModuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [...CRM_MODULES],
      declarations: [ EllipsisContentModuleComponent, ViewboxComponent, CodeboxComponent, DescriptionComponent ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EllipsisContentModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
