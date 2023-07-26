import { Component ,OnInit,ElementRef,ViewChild,AfterViewInit} from '@angular/core';
import { CowinService } from './cowin.service';
import * as ChartDataLabels from 'chartjs-plugin-datalabels';
import 'chart.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[CowinService]
})
export class AppComponent{
  public topBlockData = [
    {
      cardTitle:'REGISTRATIONS',
      styleClass:'registration-today-icon card-icon',
      count:123,
      cardColor:'top-block-card gradient-pink'
    },
    {
      cardTitle:'VACCINCATIONS',
      styleClass:'vaccination-icon card-icon',
      count:123,
      cardColor:'top-block-card gradient-blue'
    },
    {
      cardTitle:'PARTIALLY VACCINATED',
      styleClass:'partially-vaccinated-icon card-icon',
      count:123,
      cardColor:'top-block-card gradient-orange'
    },
    {
      cardTitle:'FULLY VACCINATED',
      styleClass:'fully-vaccinated-icon card-icon',
      count:123,
      cardColor:'top-block-card gradient-green'
    },
    {
      cardTitle:'12-14 VACCINCATIONS',
      styleClass:'twelve-icon card-icon',
      count:123,
      cardColor:'top-block-card gradient-sofyellow'
    },
    {
      cardTitle:'15-17 VACCINCATIONS',
      styleClass:'fifteen-icon card-icon',
      count:123,
      cardColor:'top-block-card gradient-purple'
    },
    {
      cardTitle:'18-59 PRECAUTION DOSES',
      styleClass:'eighteen-icon card-icon',
      count:123,
      cardColor:'top-block-card gradient-deepsky'
    },
    {
      cardTitle:'60+ PRECAUTION DOSES',
      styleClass:'sixty-icon card-icon',
      count:123,
      cardColor:'top-block-card gradient-watermelon'
    },

  ]
  title = 'cowin';
  loading=true;
  public totalVaccinationDoses:any=null;
  public sites:any = null;
  public totalRegistrations:any=null;
  


  

  constructor(private cowin:CowinService){}

  

  setTotalVaccinationDoses(vaccineData:any){
    let vaccinationData = {
      doseOne:vaccineData.tot_dose_1,
      doseTwo:vaccineData.tot_dose_2,
      precaution_dose:vaccineData.tot_pd,
      totalDoses:vaccineData.total
    }
    // console.log(vaccinationData)
    this.totalVaccinationDoses = vaccinationData

  }
  setTotalRegistration(registrationData:any){
    this.totalRegistrations = {
      ageTwelveToFourteen:registrationData.cit_12_14,
      ageFifteenToSeventeen:registrationData.cit_15_17,
      ageEighteenToFortyFive:registrationData.cit_18_45,
      ageFortyFiveAbove:registrationData.cit_45_above,
      total:registrationData.total
    }
    // console.log(this.totalRegistrations)
  }

  getTopBlockData(){
    this.cowin.getTopBlock().subscribe(
      (data:any)=>{
        this.loading = false;
        let vaccinationData = data['topBlock'].vaccination
        this.setTotalVaccinationDoses(vaccinationData)
        this.sites = data['topBlock'].sites
        let totalRegistrations = data['topBlock'].registration
        this.setTotalRegistration(totalRegistrations)
        
      },
      (err)=>{
        console.log(err)
      }
    )
  }
  
  ngOnInit(): void {
    this.getTopBlockData()
  }
  

  
}
