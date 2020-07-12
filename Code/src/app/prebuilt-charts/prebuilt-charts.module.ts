import { ChartLineComponent } from './chart-line/chart-line.component';
import { NgxEchartsModule } from 'ngx-echarts';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    NgxEchartsModule,
  ],
  declarations: [ChartLineComponent],
  exports: [ChartLineComponent]
})
export class PrebuiltChartsModule { }
