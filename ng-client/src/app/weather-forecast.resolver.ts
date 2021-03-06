import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { WeatherForecast } from 'src/models/weather-forecast';
import { WeatherForecastService } from 'src/app/services/weather-forecast.service';

@Injectable({
  providedIn: 'root',
})
export class WeatherForecastResolver implements Resolve<WeatherForecast[]> {
  constructor(private weatherForecastService: WeatherForecastService) {}

  resolve(): Observable<WeatherForecast[]> {
    return this.weatherForecastService.getForecasts();
  }
}
