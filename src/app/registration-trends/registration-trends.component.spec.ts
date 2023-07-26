import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationTrendsComponent } from './registration-trends.component';

describe('RegistrationTrendsComponent', () => {
  let component: RegistrationTrendsComponent;
  let fixture: ComponentFixture<RegistrationTrendsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrationTrendsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrationTrendsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
