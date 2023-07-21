import { Component, OnInit } from '@angular/core';
import { CowinService } from '../cowin.service';
import * as ChartDataLabels from 'chartjs-plugin-datalabels';
import 'chart.js';

@Component({
  selector: 'app-vaccination-trends',
  templateUrl: './vaccination-trends.component.html',
  styleUrls: ['./vaccination-trends.component.css']
})
export class VaccinationTrendsComponent implements OnInit {

  public chart = false;
  public yearChart:any;
  onChangeDoseAndAgeValue:any='dose';
  onChangeDurationValue:any='today';
  public xAxisValues:any;
  public yAxisValues:any;
  public dataSetValues:any;
  public linearChartData:any;
  public linearChartData1:any;

  onChangeDoseAndAge(event:any){
    this.onChangeDoseAndAgeValue = event.target.value

    if(this.onChangeDurationValue==='all'&&this.onChangeDoseAndAgeValue==='dose'){
      this.setVaccinationDetailsAll()
      
    };
    if(this.onChangeDurationValue==='today'&&this.onChangeDoseAndAgeValue==='dose'){
      this.getTopBlockData1()
      
    };
    if(this.onChangeDurationValue==='all'&&this.onChangeDoseAndAgeValue==='age'){
      this.setVaccinationDetailsAgeAll()
      
    }
    if(this.onChangeDurationValue==='today'&&this.onChangeDoseAndAgeValue==='age'){
      this.setVaccinationDetailsTodayAge()
      
    }
    if(this.onChangeDurationValue==='last 30'&&this.onChangeDoseAndAgeValue==='age'){
      this.setvaccinationDetailsLast30Age()
      
    }
    if(this.onChangeDurationValue==='last 30'&&this.onChangeDoseAndAgeValue==='dose'){
      this.setvaccinationDetailsLast30Dose()
    }
    
  }

  onChangeDuration(event:any){
    this.onChangeDurationValue = event.target.value
    // console.log(this.onChangeDurationValue)

    if(this.onChangeDurationValue==='all'&&this.onChangeDoseAndAgeValue==='dose'){
      this.setVaccinationDetailsAll()
      
    };
    if(this.onChangeDurationValue==='today'&&this.onChangeDoseAndAgeValue==='dose'){
      this.getTopBlockData1()
      
    };
    if(this.onChangeDurationValue==='all'&&this.onChangeDoseAndAgeValue==='age'){
      this.setVaccinationDetailsAgeAll()
      
    }
    if(this.onChangeDurationValue==='today'&&this.onChangeDoseAndAgeValue==='age'){
      this.setVaccinationDetailsTodayAge()
    }
    if(this.onChangeDurationValue==='last 30'&&this.onChangeDoseAndAgeValue==='age'){
      
      this.setvaccinationDetailsLast30Age()
    }
    if(this.onChangeDurationValue==='last 30'&&this.onChangeDoseAndAgeValue==='dose'){
      this.setvaccinationDetailsLast30Dose()
    }
    
  }

  initialiseDatasetValuesByDose(){
    this.dataSetValues = [{
      label: 'Total Doses',
      type:'line',
      data: this.yAxisValues[0],
      // borderColor: "rgb(245,67,148)",
      tension: 0.1,
      fill: "start",
      backgroundColor: "rgba(245,67,148,0.1)",
      // borderWidth: 1,
    },
    {
      label: 'Dose 1',
      type:'line',
      data: this.yAxisValues[1],
      // borderColor: "rgb(255,152,0)",
      tension: 0.1,
      fill: "start",
      backgroundColor: "rgba(255,152,0,0.1)",
      
      // borderWidth: 1,
    },
    {
      label: 'Dose 2',
      type:'line',
      data: this.yAxisValues[2],
      // borderColor: "rgb(33,204,152)",
      tension: 0.1,
      fill: "start",
      backgroundColor: "rgba(33,204,152,0.1)",
      // borderWidth: 1,
    },
    {
      label: 'Precaution Dose',
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
    }];
  }

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
    
  
    constructor(private cowin:CowinService){}
  
    setVaccinationDetailsByTime(){
      let linearData = this.linearChartData['vaccinationDoneByTime']
      let timeData = linearData.map((item:any) => {
        const range = item.label;
        const splitted = range.split("-").pop();
        // console.log(splitted);
        return splitted;
      })
  
      let totalDoses = linearData.map((item:any) => item.count)
      let doseOne = linearData.map((item:any) => item.dose_one)
      let doseTwo = linearData.map((item:any) => item.dose_two)
      let precautionDose = linearData.map((item:any) => item.dose_pd)
  
      this.yAxisValues = [totalDoses,doseOne,doseTwo,precautionDose]
      this.xAxisValues = timeData
      this.initialiseDatasetValuesByDose()
      this.setLineChartDetails()
  
    }

    setVaccinationDetailsAll(){
      let linearData = this.linearChartData1['weeklyReport']
      // console.log(this.linearChartData['weeklyReport'])
      let timeData = linearData.map((item:any) => {
        const range = item.label;
        const splitted = range.split("-").pop();
        // console.log(splitted);
        return splitted;
      })
  
      let totalDoses = linearData.map((item:any) => item.total)
      let doseOne = linearData.map((item:any) => item.dose1)
      let doseTwo = linearData.map((item:any) => item.dose2)
      let precautionDose = linearData.map((item:any) => item.dose_pd)
  
      this.yAxisValues = [totalDoses,doseOne,doseTwo,precautionDose]
      this.xAxisValues = timeData
      this.initialiseDatasetValuesByDose()
      this.setLineChartDetails()
      // this.setLineChartDetails()
    }

    setVaccinationDetailsAgeAll(){
      let linearData = this.linearChartData1['weeklyVacAgeWiseReport']

      let timeData = linearData.map((item:any) => {
        const range = item.label;
        return range;
      })
  
      let total = linearData.map((item:any) => item.total)
      let age_12_14 = linearData.map((item:any) => item.vac_12_14)
      let age_15_17 = linearData.map((item:any) => item.vac_15_17)
      let age_18_45 = linearData.map((item:any) => item.vac_18_45)
      let age_45_60 = linearData.map((item:any) => item.vac_45_60)
      let age_60_above = linearData.map((item:any) => item.vac_60_above)

      this.yAxisValues = [total,age_12_14,age_15_17,age_18_45,age_45_60,age_60_above]
      this.xAxisValues = timeData
      this.initialiseDatasetValuesByAge()
      this.setLineChartDetails()
      
    }

    setVaccinationDetailsTodayAge(){
      let linearData = this.linearChartData['vaccinationDoneByTimeAgeWise']
      // console.log(this.linearChartData)

      let timeData = linearData.map((item:any) => {
        const range = item.label;
            const splitted = range.split("-").pop();
            // console.log(splitted);
            return splitted;
      })
  
      let total = linearData.map((item:any) => item.total)
      let age_12_14 = linearData.map((item:any) => item.vac_12_14)
      let age_15_17 = linearData.map((item:any) => item.vac_15_17)
      let age_18_45 = linearData.map((item:any) => item.vac_18_45)
      let age_45_60 = linearData.map((item:any) => item.vac_45_60)
      let age_60_above = linearData.map((item:any) => item.vac_60_above)

      this.yAxisValues = [total,age_12_14,age_15_17,age_18_45,age_45_60,age_60_above]
      this.xAxisValues = timeData
      this.initialiseDatasetValuesByAge()
      this.setLineChartDetails()
    }

    setvaccinationDetailsLast30Age(){
      let linearData = this.linearChartData1['last30DaysAgeWiseVaccination']

      let timeData = linearData.map((item:any) => {
        const dateStr = item.vaccine_date;
              const date = new Date(dateStr);
  
              const options = {};
              const formattedDate = date.toLocaleDateString("en-US", options);
  
              // console.log(formattedDate);
              return formattedDate;
      })
  
      let total = linearData.map((item:any) => item.total)
      let age_12_14 = linearData.map((item:any) => item.vac_12_14)
      let age_15_17 = linearData.map((item:any) => item.vac_15_17)
      let age_18_45 = linearData.map((item:any) => item.vac_18_45)
      let age_45_60 = linearData.map((item:any) => item.vac_45_60)
      let age_60_above = linearData.map((item:any) => item.vac_60_above)

      this.yAxisValues = [total,age_12_14,age_15_17,age_18_45,age_45_60,age_60_above]
      this.xAxisValues = timeData
      this.initialiseDatasetValuesByAge()
      this.setLineChartDetails()

    }

    setvaccinationDetailsLast30Dose(){
      let linearData = this.linearChartData1['last30DaysVaccination']
      let timeData = linearData.map((item:any) => {
        const dateStr = item.vaccine_date;
            const date = new Date(dateStr);

            const options = {};
            const formattedDate = date.toLocaleDateString("en-US", options);

            // console.log(formattedDate);
            return formattedDate;
      })
  
      let totalDoses = linearData.map((item:any) => item.total)
      let doseOne = linearData.map((item:any) => item.dose_1)
      let doseTwo = linearData.map((item:any) => item.dose_2)
      let precautionDose = linearData.map((item:any) => item.dose_pd)
  
      this.yAxisValues = [totalDoses,doseOne,doseTwo,precautionDose]
      this.xAxisValues = timeData
      this.initialiseDatasetValuesByDose()
      this.setLineChartDetails()
    }

    

    

    
    

   
  
    getTopBlockData1(){
      this.cowin.getTopBlock().subscribe(
        (data:any)=>{
          this.linearChartData = data
          this.setVaccinationDetailsByTime()
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
      // this.getVaccineDetails()
      
    }

}
