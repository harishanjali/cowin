import { Component, OnInit } from '@angular/core';
import { CowinService } from '../cowin.service';
import * as ChartDataLabels from 'chartjs-plugin-datalabels';
import 'chart.js';

@Component({
  selector: 'app-vaccination-by-age',
  templateUrl: './vaccination-by-age.component.html',
  styleUrls: ['./vaccination-by-age.component.css']
})
export class VaccinationByAgeComponent implements OnInit {

  public chart = false;
  public pieChartData:any;
  // public pieChartOptions:any;

 

  createPieChart(data:any){
    
      this.pieChartData = {
        type: 'bar',
        labels:[ChartDataLabels],
  data:{
    datasets:[{data:[10,20,30,40,50],type:'bar',}],
    labels:['12-14','15-17','18-44','45-60','60 above']
    
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        labels: {
          usePointStyle: true, // Use circular legend point style
        },
        position: 'right',
      },
      title: {
        display: false,
        // text: 'Chart.js Pie Chart'
      }
    },
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true
      }
    }
  },
      }
    this.chart=true;
  }

  constructor(private cowin:CowinService) { }
  getPieChartData(){
    this.cowin.getTopBlock().subscribe(
      (data:any)=>{
        // console.log()
        this.createPieChart(data['topBlock'].vaccination)
      },
      (err)=>{
        console.log(err)
      }
    )

}
ngOnInit(): void {
  this.getPieChartData()
}
}
