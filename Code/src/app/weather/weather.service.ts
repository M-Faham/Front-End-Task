import { environment } from './../../environments/environment';
import { ConnectionService } from '../@core/utils/connection.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  weatherApiPrefix = 'https://api.worldweatheronline.com/premium/v1';

  constructor(private connectionService: ConnectionService) { }

  getCurrentCountry() {
    const url = `http://ip-api.com/json/`;
    return this.connectionService.get(url);
  }

  getCurrentWeather(location: string, days: number) {
    const url =
      `${this.weatherApiPrefix}/weather.ashx?key=${environment.worldweatheronline}&q=${location}&format=json&num_of_days=${days}`;

    return this.connectionService.get(url);
  }

  getHistorcalWeather(location) {
    const url =
      `${this.weatherApiPrefix}/past-weather.ashx?key=${environment.worldweatheronline}&q=${location}&format=json`;
    return this.connectionService.get(url);
  }
}
