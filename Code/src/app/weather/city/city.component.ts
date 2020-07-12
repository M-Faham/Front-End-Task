import { HistoricalWeather } from './../../@core/models/historicalWeather';
import { CurrentWeather } from './../../@core/models/currentWeather';
import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
import { HelperService } from 'src/app/@core/utils/helper.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.scss']
})
export class CityComponent implements OnInit {

  selectedCity: string;

  currentWeather: CurrentWeather;
  historicalWeather: HistoricalWeather;
  currentTime;


  chartData;



  hourlyTempC: {
    yAxis: {
      name: string,
      data: any[]
    },
    xAxis: {
      name: string,
      data: any[]
    }
  };


  astronomyChart: {
    yAxis: {
      name: string,
      data: any[]
    },
    xAxis: {
      name: string,
      data: any[]
    }
  };



  constructor(
    private weatherService: WeatherService,
    private helperService: HelperService,
    private route: ActivatedRoute,
  ) { }


  ngOnInit() {

    this.getLocation();
    this.getTime();

  }



  //  ------------- SECTION  Location -------------

  getLocation(): void {
    this.route.params.subscribe(
      res => {
        this.selectedCity = res.code;
        this.setSystemData();
        this.getHistorcalWeather();
        this.getWeather();
      }
    );
  }


  //  ------------- SECTION  Default system info title, lang if exist etc... -------------

  setSystemData() {
    this.helperService.changeTitle('Weather');
  }


  //  ------------- SECTION  Clock -------------
  getTime() {
    setInterval(() => this.currentTime = Date.now(), 1000);
  }


  //  ------------- SECTION  Template Time formatting -------------


  fixTimeFromat(time) {
    time = (parseInt(time, null) / 100).toString() + ':00';
    return time;
  }


  //  ------------- SECTION  Weather -------------


  getWeather() {
    const days = 5;
    this.weatherService.getCurrentWeather(this.selectedCity, days).subscribe(
      res => {
        console.log('weatherService', res);
        this.currentWeather = res.data;
        this.setChartData();
        this.setAstronmyChart();
      }
    );
  }

  getHistorcalWeather() {

    this.weatherService.getHistorcalWeather(this.selectedCity).subscribe(
      res => {
        this.historicalWeather = res.data;
        this.setHourlyTempCChart();
      }
    );
  }



  //  ------------- SECTION  Charts -------------



  setChartData() {
    this.chartData = [];

    this.currentWeather.weather.forEach(day => {
      const data = {
        name: day.date,
        value: day.maxtempC,
      };

      this.chartData.push(data);
    });
  }



  setHourlyTempCChart() {
    const hourly = this.historicalWeather.weather[0].hourly;

    const yAxis = hourly.map(a => a.tempC);
    const xAxis = hourly.map(a => (parseInt(a.time, null) / 100).toString() + ':00');

    this.hourlyTempC = {
      yAxis: {
        name: 'Temp',
        data: yAxis,
      },
      xAxis: {
        name: 'Time',
        data: xAxis,
      }
    };
  }

  //  This chart doesn't make any sense but I won't remove it ;)

  setAstronmyChart() {
    const astronomy = this.currentWeather.weather[0].astronomy[0];
    const data = {
      xAxis: {
        name: 'Astronomy',
        data: ['Sunrise', 'Sunset', 'Moonrise', 'Moonset'],
      },
      yAxis: {
        name: 'Time',
        data: [astronomy.sunrise, astronomy.sunset, astronomy.moonrise, astronomy.moonset]
      },
    };

    this.astronomyChart = data;

  }


}
