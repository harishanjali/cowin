import { Component, OnInit } from '@angular/core';
import { CowinService } from '../cowin.service';
import 'chart.js';
import * as ChartDataLabels from 'chartjs-plugin-datalabels';

@Component({
  selector: 'app-aefi-reported',
  templateUrl: './aefi-reported.component.html',
  styleUrls: ['./aefi-reported.component.css']
})
export class AefiReportedComponent implements OnInit {

  public chart = false;
  public yearChart:any;
  public xAxisValues:any;
  public yAxisValues:any;
  public dataSetValues:any;
  public linearChartData:any;

  constructor(private cowin:CowinService) { }

  initialiseDataAEFi(){
    this.dataSetValues = [{
      label: 'Total',
      type:'line',
      data: this.yAxisValues[0],
      // borderColor: "rgb(245,67,148)",
      tension: 0.1,
      fill: "start",
      backgroundColor: "rgba(245,67,148,0.1)",
      // borderWidth: 1,
    }
  ];
  }

  setLineChartDetails(){
  
    this.yearChart = {
      plugins: [ChartDataLabels],
      data: {
        labels: this.xAxisValues,
        datasets:
          this.dataSetValues,
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              callback: (value:any) => (value === 1 || value === 0 ? value : ""),
            },
            max:1
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

  setAEFIDetails(){
    let linearData = this.linearChartData['last30DaysAefi']
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
  
      let total = linearData.map((item:any) => item.aefi)
      
      this.yAxisValues = [total]
      this.xAxisValues = timeData
      this.initialiseDataAEFi()
      this.setLineChartDetails()
  }
  getTopBlockData1(){
    this.cowin.getTopBlock().subscribe(
      (data:any)=>{
        this.linearChartData = data
        this.setAEFIDetails()
        // this.setVaccinationDetailsDoseAll(data['weeklyReport'])
        // console.log(data)
      },
      (err)=>{
        console.log(err)
      }
    )
  }

  ngOnInit(): void {
    this.getTopBlockData1()
  }

}
