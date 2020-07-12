import { Component, OnInit, Input } from '@angular/core';
import { EChartOption } from 'echarts';

@Component({
  selector: 'app-chart-line',
  templateUrl: './chart-line.component.html',
})
export class ChartLineComponent implements OnInit {
  chartOption: EChartOption;
  @Input() data: {
    yAxis: {
      name: string,
      data: any[]
    },
    xAxis: {
      name: string,
      data: any[]
    }
  };



  constructor() { }

  ngOnInit() {
    this.setChart();
  }



  setChart() {

    const textStyle = {
      color: 'white'
    };





    const xAxis = [];
    this.data.xAxis.data.forEach(element => {
      xAxis.push(

        {
          value: element,
          textStyle,
        }
      );
    });




    this.chartOption = {
      xAxis: {
        type: 'category',
        data: xAxis,
        name: this.data.xAxis.name,
        nameTextStyle: { color: 'white', },
        axisLine: { lineStyle: { color: 'white' } }

      },
      yAxis: {
        type: 'category',
        nameTextStyle: { color: 'white', },
        name: this.data.yAxis.name,
        axisLine: { lineStyle: { color: 'white' } }
      },
      series: [{
        data: this.data.yAxis.data,
        type: 'line',
        itemStyle: { normal: { color: '#28c587', } },
      }]
    };
  }
}
