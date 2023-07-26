import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VaccinationByStateComponent } from './vaccination-by-state.component';

describe('VaccinationByStateComponent', () => {
  let component: VaccinationByStateComponent;
  let fixture: ComponentFixture<VaccinationByStateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VaccinationByStateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VaccinationByStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
