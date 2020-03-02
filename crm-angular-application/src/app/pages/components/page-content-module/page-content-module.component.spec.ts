import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageContentModuleComponent } from './page-content-module.component';
import { CRM_MODULES } from 'src/app/util/mock.util';
import { CodeboxComponent } from 'src/app/components/codebox/codebox.component';
import { DescriptionComponent } from 'src/app/components/description/description.component';
import { ViewboxComponent } from 'src/app/components/viewbox/viewbox.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('PageContentModuleComponent', () => {
  let component: PageContentModuleComponent;
  let fixture: ComponentFixture<PageContentModuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [...CRM_MODULES],
      declarations: [ PageContentModuleComponent, CodeboxComponent, DescriptionComponent, ViewboxComponent ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageContentModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
