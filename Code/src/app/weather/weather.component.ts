import { CurrentWeather } from './../@core/models/currentWeather';
import { HelperService } from './../@core/utils/helper.service';
import { WeatherService } from './weather.service';
import { Component, OnInit } from '@angular/core';
import { Country } from '../@core/models/country';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {

  currentCountry: Country;
  cities: string[] = [];
  currentWeather: CurrentWeather;
  currentTime;
  loading: boolean;



  constructor(
    private weatherService: WeatherService,
    private helperService: HelperService,
  ) { }


  ngOnInit() {
    this.setSystemData();
    this.getTime();
    this.getCountryCode();
  }

  //  ------------- SECTION  Default system info title, lang if exist etc... -------------

  setSystemData() {
    this.helperService.changeTitle('Weather');
  }

  //  ------------- SECTION  Country -------------


  getCountryCode() {
    this.weatherService.getCurrentCountry().subscribe(
      res => {


        this.currentCountry = res;

        this.getWeather();
        this.getCities();
      }

    );
  }


  //  ------------- SECTION  Weather -------------

  getWeather() {
    if (this.loading) { return; }
    const days = 5;
    this.loading = true;
    this.weatherService.getCurrentWeather(this.currentCountry.country, days).subscribe(
      res => {
        this.currentWeather = res.data;
        this.loading = false;

      }
    );
  }

  //  ------------- SECTION  Cities -------------


  getCities() {

    const code = this.currentCountry.countryCode;
    if (code === 'EG') {
      this.cities = [
        'cairo', 'Alexandria', 'Giza', 'Suez', 'Port Said', 'Luxor', 'Dakahlia', 'Gharbia', 'Faiyum', 'Sharqia',
      ];
    } else if (code === 'US') {
      this.cities = [
        'New York', 'California', 'Illinois', 'Texas', 'Philadelphia', 'Phoenix', 'Manhattan', 'Bronx',
      ];
    }
  }

  //  ------------- SECTION  Clock -------------

  getTime() {
    setInterval(() => this.currentTime = Date.now(), 1000);
  }
}

