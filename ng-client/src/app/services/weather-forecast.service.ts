import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BASE_API_URL } from 'src/app/tokens';
import { Observable } from 'rxjs';
import { WeatherForecast } from 'src/models/weather-forecast';

@Injectable({
  providedIn: 'root',
})
export class WeatherForecastService {
  constructor(
    private http: HttpClient,
    @Inject(BASE_API_URL) private baseUrl: string
  ) {}

  getForecasts(): Observable<WeatherForecast[]> {
    return this.http.get<WeatherForecast[]>(`${this.baseUrl}/WeatherForecast`);
  }
}
