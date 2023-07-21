import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VaccinationByAgeComponent } from './vaccination-by-age.component';

describe('VaccinationByAgeComponent', () => {
  let component: VaccinationByAgeComponent;
  let fixture: ComponentFixture<VaccinationByAgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VaccinationByAgeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VaccinationByAgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
