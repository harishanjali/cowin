import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VaccinationByTypeComponent } from './vaccination-by-type.component';

describe('VaccinationByTypeComponent', () => {
  let component: VaccinationByTypeComponent;
  let fixture: ComponentFixture<VaccinationByTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VaccinationByTypeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VaccinationByTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
