import { Component, OnInit } from '@angular/core';
import { CowinService } from '../cowin.service';
import 'chart.js';
import * as ChartDataLabels from 'chartjs-plugin-datalabels';

@Component({
  selector: 'app-rural-vs-urban-trend',
  templateUrl: './rural-vs-urban-trend.component.html',
  styleUrls: ['./rural-vs-urban-trend.component.css']
})
export class RuralVsUrbanTrendComponent implements OnInit {

  public chart = false;
  public yearChart:any;
  public xAxisValues:any;
  public yAxisValues:any;
  public dataSetValues:any;
  public linearChartData:any;

  constructor(private cowin:CowinService) { }

  initialiseRuralVsUrban(){
    this.dataSetValues = [{
      label: 'Urban',
      type:'bar',
      data: this.yAxisValues[0],
      // borderColor: "rgb(245,67,148)",
      tension: 0.1,
      fill: "start",
      // backgroundColor: "rgba(245,67,148,0.1)",
      // borderWidth: 1,
    },
    {
      label: 'Rural',
      type:'bar',
      data: this.yAxisValues[1],
      // borderColor: "rgb(245,67,148)",
      tension: 0.1,
      fill: "start",
      // backgroundColor: "rgba(245,67,148,0.1)",
      // borderWidth: 1,
    }
  ];
  }

  setChart(){
    this.yearChart = {
      plugins: [ChartDataLabels],
      data: {
        labels: this.xAxisValues,
        datasets:
          this.dataSetValues,
      },
      options: {
        scales: {
          x: {
            stacked: true,
            grid: {
              color: "#00000005",
            },
          },
          y: {
            stacked: true,
            beginAtZero: true,
            ticks: {
              callback: (value:any) => {
                return `${value / 1000}k`;
              },
            },
            grid: {
              color: "#00000005",
            },
          },
        },
        plugins: {
          legend: {
            labels: {
              usePointStyle: true, // Use circular legend point style
            },
            position: "bottom",
          },
        },
      },
      
    };
    this.chart = true;
  }

  setRuralVsUrban(){
    let linearData = this.linearChartData['last30DaysVaccination']
      // console.log(this.linearChartData)

      let timeData = linearData.map((item:any) => {
        const dateStr = item.vaccine_date;
            // console.log(dateStr);
            const date = new Date(dateStr);

            const options = {};
            const formattedDate = date.toLocaleDateString("en-US", options);

            // console.log(formattedDate);
            return formattedDate;
      })
  
      let rural = linearData.map((item:any) => item.rural)
      let urban = linearData.map((item:any) => item.urban)
      

      this.yAxisValues = [urban,rural]
      this.xAxisValues = timeData
      this.initialiseRuralVsUrban()
      this.setChart()
  }

  getVaccinationDetails(){
    this.cowin.getVaccinationDetails().subscribe(
      (data:any)=>{
        this.linearChartData = data
        this.setRuralVsUrban()
      },
      (err)=>{
        console.log(err)
      }
    )
  }

  ngOnInit(): void {
    this.getVaccinationDetails()
  }

}
