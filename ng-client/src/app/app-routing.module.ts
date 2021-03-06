import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WeatherForecastListComponent } from './weather-forecast-list/weather-forecast-list.component';
import { WeatherForecastResolver } from './weather-forecast.resolver';

const routes: Routes = [
  {
    path: '',
    component: WeatherForecastListComponent,
    resolve: { forecasts: WeatherForecastResolver },
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
