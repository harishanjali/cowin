import { Component, OnInit } from '@angular/core';
import * as ChartDataLabels from 'chartjs-plugin-datalabels';
import 'chart.js';
import { CowinService } from '../cowin.service';

@Component({
  selector: 'app-vaccination-by-gender',
  templateUrl: './vaccination-by-gender.component.html',
  styleUrls: ['./vaccination-by-gender.component.css']
})
export class VaccinationByGenderComponent implements OnInit {

  public chart = false;
  public yearChart:any;
  public xAxisValues:any;
  public yAxisValues:any;
  public dataSetValues:any;
  public linearChartData:any;

 

  constructor(private cowin:CowinService) { }

  initialiseDatasetValuesByAge(){
    this.dataSetValues = [{
      label: 'Total',
      type:'line',
      data: this.yAxisValues[0],
      // borderColor: "rgb(245,67,148)",
      tension: 0.1,
      fill: "start",
      backgroundColor: "rgba(245,67,148,0.1)",
      // borderWidth: 1,
    },
    {
      label: '12-14',
      type:'line',
      data: this.yAxisValues[1],
      // borderColor: "rgb(255,152,0)",
      tension: 0.1,
      fill: "start",
      backgroundColor: "rgba(255,152,0,0.1)",
      
      // borderWidth: 1,
    },
    {
      label: '15-17',
      type:'line',
      data: this.yAxisValues[2],
      // borderColor: "rgb(33,204,152)",
      tension: 0.1,
      fill: "start",
      backgroundColor: "rgba(33,204,152,0.1)",
      // borderWidth: 1,
    },
    {
      label: '18-44',
      type:'line',
      data: this.yAxisValues[3],
      // borderColor: "rgb(18,173,6)",
      height:'10px',
      width:'10px',
      tension: 0.1,
      fill: "start",
      backgroundColor: "rgba(18,173,6,0.1)",
      borderRadius:'50%'
      // borderWidth: 1,
    },
    {
      label: '45-60',
      type:'line',
      data: this.yAxisValues[4],
      // borderColor: "black",
      height:'10px',
      width:'10px',
      tension: 0.1,
      fill: "start",
      backgroundColor: "rgba(0,0,0,0.1)",
      borderRadius:'50%'
      // borderWidth: 1,
    },
    {
      label: 'above 60',
      type:'line',
      data: this.yAxisValues[5],
      // borderColor: "red",
      height:'10px',
      width:'10px',
      tension: 0.1,
      fill: "start",
      backgroundColor: "rgba(18,173,6,0.1)",
      borderRadius:'50%'
      // borderWidth: 1,
    }
  ];
  }

  setLineChartDetails(){
  
    this.yearChart = {
      plugins: [ChartDataLabels],
      labels: ["Male", "Female", "Others"],
    datasets: [
      {
        // labels: ["Male", "Female", "Others"],
        data: [10,20,30],
        backgroundColor: [
          "rgb(84,57,252)",
          "rgb(245,67,148)",
          "rgb(255,152,0)",
        ],
        hoverOffset: 4,
        type:'pie'
      },
    ],
      options: {
        scales: {
          y: {
            display: false, // Hide y-axis
          },
          x: {
            display: false, // Hide x-axis
          },
        },
        plugins: {
          legend: {
            display: true, // Hide legend
            position: "right",
            labels: {
              usePointStyle: true, // Use circular legend point style
            },
          },
        },
        maintainAspectRatio: false,
      },
      
    };
    this.chart = true;
  }

  setVaccinationByGenderDetails(){
    let linearData = this.linearChartData['topBlock'].vaccination
      // console.log(this.linearChartData)

      
  
      let male = linearData.male
      let female = linearData.female
      let others = linearData.others
      // let age_18_45 = linearData.map((item:any) => item.age18)
      // let age_45_60 = linearData.map((item:any) => item.age45)
      // let age_60_above = linearData.map((item:any) => item.age60)

      this.yAxisValues = [male,female,others]
      // this.xAxisValues = timeData
      this.initialiseDatasetValuesByAge()
      this.setLineChartDetails()
  }

  getTopBlockData1(){
    this.cowin.getTopBlock().subscribe(
      (data:any)=>{
        this.linearChartData = data
        this.setVaccinationByGenderDetails()
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
