import { Component, OnInit } from '@angular/core';
import { CowinService } from '../cowin.service';
import * as ChartDataLabels from 'chartjs-plugin-datalabels';
import 'chart.js';

@Component({
  selector: 'app-vaccination-by-type',
  templateUrl: './vaccination-by-type.component.html',
  styleUrls: ['./vaccination-by-type.component.css']
})
export class VaccinationByTypeComponent implements OnInit {
  public chart = false;
  public pieChartData:any;
  // public pieChartOptions:any;

 

  createPieChart(data:any){
    
      this.pieChartData = {
        // type: 'doughnut',
        // labels:[ChartDataLabels],
        type: 'doughnut',
      data: {
        labels: ['Credit', 'Debit', 'Total'],
        datasets: [{
          label: '',
          data:[10,20,30],
          backgroundColor: [
            "#7ad5ff",
            "#1f81ff",
            "#6eb841",
          ],
          type: 'doughnut',

        }]
      }
  // data:{
  //   datasets:[{data:[10,20,30,30,40],type:'doughnut',}],
  //   labels:['Covishield','Covaxin','Sputnik V','Corbevax','Covovax']
    
  
    
  // },
  // options: {
  //   responsive: true,
  //   plugins: {
  //     legend: {
  //       labels: {
  //         usePointStyle: true, // Use circular legend point style
  //       },
  //       position: 'right',
  //     },
  //     title: {
  //       display: false,
  //       // text: 'Chart.js Pie Chart'
  //     }
  //   }
  // },
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
