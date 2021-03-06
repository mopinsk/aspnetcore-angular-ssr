import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherForecastListComponent } from './weather-forecast-list.component';

describe('WeatherForecastListComponent', () => {
  let component: WeatherForecastListComponent;
  let fixture: ComponentFixture<WeatherForecastListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeatherForecastListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherForecastListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
