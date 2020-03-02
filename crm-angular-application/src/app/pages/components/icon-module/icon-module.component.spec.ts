import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IconModuleComponent } from './icon-module.component';
import { CRM_MODULES } from 'src/app/util/mock.util';
import { ViewboxComponent } from 'src/app/components/viewbox/viewbox.component';
import { DescriptionComponent } from 'src/app/components/description/description.component';
import { CodeboxComponent } from 'src/app/components/codebox/codebox.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('IconModuleComponent', () => {
  let component: IconModuleComponent;
  let fixture: ComponentFixture<IconModuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [...CRM_MODULES],
      declarations: [ IconModuleComponent, ViewboxComponent, DescriptionComponent, CodeboxComponent ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
