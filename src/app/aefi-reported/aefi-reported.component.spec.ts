import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AefiReportedComponent } from './aefi-reported.component';

describe('AefiReportedComponent', () => {
  let component: AefiReportedComponent;
  let fixture: ComponentFixture<AefiReportedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AefiReportedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AefiReportedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
