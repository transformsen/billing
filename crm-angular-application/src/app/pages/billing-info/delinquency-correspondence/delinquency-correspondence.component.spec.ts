import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DelinquencyCorrespondenceComponent } from './delinquency-correspondence.component';
import { CRM_MODULES } from 'src/app/util/mock.util';
import { createDelinquencyCorrespondence } from 'src/app/fixtures/billing.service.mock';

describe('DelinquencyCorrespondenceComponent', () => {
  let component: DelinquencyCorrespondenceComponent;
  let fixture: ComponentFixture<DelinquencyCorrespondenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [...CRM_MODULES],
      declarations: [ DelinquencyCorrespondenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DelinquencyCorrespondenceComponent);
    component = fixture.componentInstance;
    component.delinquencyCorrespondence = createDelinquencyCorrespondence()
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
