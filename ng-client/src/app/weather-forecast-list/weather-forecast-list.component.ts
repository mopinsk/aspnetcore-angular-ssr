import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { WeatherForecast } from 'src/models/weather-forecast';

@Component({
  selector: 'app-weather-forecast-list',
  templateUrl: './weather-forecast-list.component.html',
  styleUrls: ['./weather-forecast-list.component.scss'],
})
export class WeatherForecastListComponent {
  public forecasts$: Observable<
    WeatherForecast[]
  > = this.activatedRoute.data.pipe(map((data) => data.forecasts));

  constructor(private activatedRoute: ActivatedRoute) {}
}
