import { BarChartComponent } from './bar-chart/bar-chart.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [BarChartComponent],
  exports: [BarChartComponent],
})
export class D3Module { }
