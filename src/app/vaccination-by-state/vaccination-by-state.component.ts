import { Component, OnInit,AfterViewInit, ViewChild, ElementRef  } from '@angular/core';
import 'chartjs-chart-geo';
import * as Chart from 'chart.js';

@Component({
  selector: 'app-vaccination-by-state',
  templateUrl: './vaccination-by-state.component.html',
  styleUrls: ['./vaccination-by-state.component.css']
})
export class VaccinationByStateComponent implements OnInit {
  
  public chart:any;
  public canvas:any;
  

  constructor() { 
    // @ViewChild('indiaMapCanvas') indiaMapCanvas: ElementRef;
  }
  

  

  ngOnInit(): void {
  }

}
