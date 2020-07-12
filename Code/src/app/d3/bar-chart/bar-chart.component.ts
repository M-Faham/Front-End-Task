import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent implements OnInit {

  @ViewChild('chart', { static: true }) private chartContainer: ElementRef;
  @Input() private data: Array<any>;
  private margin: any = { top: 20, bottom: 20, left: 20, right: 20 };


  constructor() { }

  ngOnInit() {
    this.oneBar();
  }


  oneBar() {
    const data = this.data;

    // const barsWidth = 300;
    // const barsHeight = 300;
    const axisMargin = 50;


    const element = this.chartContainer.nativeElement;



    let barsWidth = element.offsetWidth - this.margin.left - this.margin.right - 50;
    const barsHeight = element.offsetHeight - this.margin.top - this.margin.bottom - 10;

    console.log('barWid', barsWidth);

    barsWidth = barsWidth > 200 ? barsWidth : 220;

    const chart = d3.select(element).append('svg');


    const yScale = d3.scaleLinear()
      .domain([0, d3.max(data, (d) => {
        return d.value;
      })])
      .range([barsHeight, 30]);


    const xScale = d3.scaleBand()
      .domain(
        data.map(
          (d) => {
            return d.name;
          }
        )
      )
      .rangeRound([0, barsWidth])
      .padding(0.1);

    const bars = chart.append('g')
      .attr('id', 'bars-container');

    bars.selectAll('.bar')
      .data(data)
      .enter().append('rect')
      .attr('x', (d) => {
        return xScale(d.name);
      })
      .attr('y', (d) => {
        return yScale(d.value);
      })
      .attr('width', xScale.bandwidth() - 30)
      .attr('height', (d) => barsHeight - yScale(d.value))
      .append('title')
      .text((d) => {
        return d.value;
      });

    bars.attr('transform', 'translate(' + axisMargin + ',0)');

    const yAxis = chart.append('g')
      .attr('id', 'y-axis')
      .call(d3.axisLeft(yScale).ticks(10))
      .attr('transform', 'translate(' + axisMargin + ',0)');

    const xAxis = chart.append('g')
      .attr('id', 'x-axis')
      .call(d3.axisBottom(xScale))
      .attr('transform', 'translate(' + axisMargin + ',' + barsHeight + ')')
      .selectAll('text')
      .style('text-anchor', 'start')
      .attr('transform', 'rotate(45)');
  }




}
