import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopBlockCardComponent } from './top-block-card.component';

describe('TopBlockCardComponent', () => {
  let component: TopBlockCardComponent;
  let fixture: ComponentFixture<TopBlockCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopBlockCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopBlockCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
