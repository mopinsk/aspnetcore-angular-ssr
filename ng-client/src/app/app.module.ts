import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TransferHttpCacheModule } from '@nguniversal/common';
import { environment } from 'src/environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BASE_API_URL } from './tokens';
import { WeatherForecastListComponent } from './weather-forecast-list/weather-forecast-list.component';

@NgModule({
  declarations: [AppComponent, WeatherForecastListComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    HttpClientModule,
    TransferHttpCacheModule,
    AppRoutingModule,
  ],
  providers: [
    {
      provide: BASE_API_URL,
      useValue: environment.baseUrl,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
