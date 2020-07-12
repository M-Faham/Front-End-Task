import { PrebuiltChartsModule } from './../prebuilt-charts/prebuilt-charts.module';
import { D3Module } from './../d3/d3.module';
import { WeatherService } from './weather.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherRoutingModule, components } from './weather-routing.module';

@NgModule({
  imports: [
    CommonModule,
    WeatherRoutingModule,
    D3Module,
    PrebuiltChartsModule,
  ],
  providers: [
    WeatherService,
  ],
  declarations: [...components]
})
export class WeatherModule { }
