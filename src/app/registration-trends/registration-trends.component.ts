import { Component, OnInit } from '@angular/core';
import * as ChartDataLabels from 'chartjs-plugin-datalabels';
import 'chart.js';
import { CowinService } from '../cowin.service';

@Component({
  selector: 'app-registration-trends',
  templateUrl: './registration-trends.component.html',
  styleUrls: ['./registration-trends.component.css']
})
export class RegistrationTrendsComponent implements OnInit {
  onChangeDurationValue:any='today';
  public chart = false;
  public yearChart:any;
  public xAxisValues:any;
  public yAxisValues:any;
  public dataSetValues:any;
  public linearChartData:any;
  public linearChartData1:any;

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
              callback: (value:any) => {
                return `${value / 1000}k`;
              },
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

  setRegistrationsToday(){
    let linearData = this.linearChartData['timeWiseTodayRegReport']
      // console.log(this.linearChartData)

      let timeData = linearData.map((item:any) => {
        const range = item.label;
            const splitted = range.split("-").pop();
            // console.log(splitted);
            return splitted;
      })
  
      let total = linearData.map((item:any) => item.total)
      let age_12_14 = linearData.map((item:any) => item.age12)
      let age_15_17 = linearData.map((item:any) => item.age15)
      let age_18_45 = linearData.map((item:any) => item.age18)
      let age_45_60 = linearData.map((item:any) => item.age45)
      let age_60_above = linearData.map((item:any) => item.age60)

      this.yAxisValues = [total,age_12_14,age_15_17,age_18_45,age_45_60,age_60_above]
      this.xAxisValues = timeData
      this.initialiseDatasetValuesByAge()
      this.setLineChartDetails()
  }

  setRegistrationsAll(){
    let linearData = this.linearChartData1['regWeekReportData']
      // console.log(this.linearChartData)

      let timeData = linearData.map((item:any) => {
        const range = item.label;
            
            return range;
      })
  
      let total = linearData.map((item:any) => item.total)
      let age_12_14 = linearData.map((item:any) => item.age12)
      let age_15_17 = linearData.map((item:any) => item.age15)
      let age_18_45 = linearData.map((item:any) => item.age18)
      let age_45_60 = linearData.map((item:any) => item.age45)
      let age_60_above = linearData.map((item:any) => item.age60)

      this.yAxisValues = [total,age_12_14,age_15_17,age_18_45,age_45_60,age_60_above]
      this.xAxisValues = timeData
      this.initialiseDatasetValuesByAge()
      this.setLineChartDetails()
  }

  setRegistrationLast30(){
    let linearData = this.linearChartData1['regReportData']
      // console.log(this.linearChartData)

      let timeData = linearData.map((item:any) => {
        const dateStr = item.reg_date;
        const date = new Date(dateStr);

        const options = {};
        const formattedDate = date.toLocaleDateString("en-US", options);

        // console.log(formattedDate);
        return formattedDate;
      })
  
      let total = linearData.map((item:any) => item.total)
      let age_12_14 = linearData.map((item:any) => item.age12)
      let age_15_17 = linearData.map((item:any) => item.age15)
      let age_18_45 = linearData.map((item:any) => item.age18)
      let age_45_60 = linearData.map((item:any) => item.age45)
      let age_60_above = linearData.map((item:any) => item.age60)

      this.yAxisValues = [total,age_12_14,age_15_17,age_18_45,age_45_60,age_60_above]
      this.xAxisValues = timeData
      this.initialiseDatasetValuesByAge()
      this.setLineChartDetails()
  }
  
  onChangeDuration(event:any){
    this.onChangeDurationValue = event.target.value
    // console.log(this.onChangeDurationValue)

    if(this.onChangeDurationValue==='all'){
      this.setRegistrationsAll()
      
    };
    if(this.onChangeDurationValue==='today'){
      this.setRegistrationsToday()
      
    };
    if(this.onChangeDurationValue==='last 30'){
      this.setRegistrationLast30()
    }
    
  }

  getTopBlockData1(){
    this.cowin.getTopBlock().subscribe(
      (data:any)=>{
        this.linearChartData = data
        this.setRegistrationsToday()
        // this.setVaccinationDetailsDoseAll(data['weeklyReport'])
        // console.log(data)
      },
      (err)=>{
        console.log(err)
      }
    )
  }
  getVaccinationDetails(){
    this.cowin.getVaccinationDetails().subscribe(
      (data:any)=>{
        this.linearChartData1 = data
      },
      (err)=>{
        console.log(err)
      }
    )
  }

  ngOnInit(): void {
    this.getTopBlockData1()
    this.getVaccinationDetails()
  }

}
