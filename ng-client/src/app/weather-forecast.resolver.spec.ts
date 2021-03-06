import { TestBed } from '@angular/core/testing';

import { WeatherForecastResolver } from './weather-forecast.resolver';

describe('WeatherForecastResolver', () => {
  let resolver: WeatherForecastResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(WeatherForecastResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
