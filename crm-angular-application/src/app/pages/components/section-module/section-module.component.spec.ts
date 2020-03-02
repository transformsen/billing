import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionModuleComponent } from './section-module.component';
import { CRM_MODULES } from 'src/app/util/mock.util';
import { ViewboxComponent } from 'src/app/components/viewbox/viewbox.component';
import { DescriptionComponent } from 'src/app/components/description/description.component';
import { CodeboxComponent } from 'src/app/components/codebox/codebox.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('SectionModuleComponent', () => {
  let component: SectionModuleComponent;
  let fixture: ComponentFixture<SectionModuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [...CRM_MODULES],
      declarations: [ SectionModuleComponent, ViewboxComponent, DescriptionComponent, CodeboxComponent ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
