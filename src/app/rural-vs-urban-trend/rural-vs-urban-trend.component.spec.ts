import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RuralVsUrbanTrendComponent } from './rural-vs-urban-trend.component';

describe('RuralVsUrbanTrendComponent', () => {
  let component: RuralVsUrbanTrendComponent;
  let fixture: ComponentFixture<RuralVsUrbanTrendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RuralVsUrbanTrendComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RuralVsUrbanTrendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
