import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForecastAstroComponent } from './forecast-astro.component';

describe('ForecastAstroComponent', () => {
  let component: ForecastAstroComponent;
  let fixture: ComponentFixture<ForecastAstroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForecastAstroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForecastAstroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
