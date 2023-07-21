import {HttpClient} from '@angular/common/http'
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CowinService {
  today = new Date();
  year = this.today.getFullYear();
  month = String(this.today.getMonth() + 1).padStart(2, "0"); // Adding +1 to account for zero-based months
  day = String(this.today.getDate()).padStart(2, "0");

  formattedDate = `${this.year}-${this.month}-${this.day}`;

  constructor(private http:HttpClient) { }
  public initial_Url = `https://api.cowin.gov.in/api/v1/reports/v2/getPublicReports?state_id=&district_id=&date=${this.formattedDate}`;
  public vaccine_url = `https://api.cowin.gov.in/api/v1/reports/v2/getVacPublicReports?state_id=&district_id=&date=${this.formattedDate}`

  getTopBlock(){
    return this.http.get(this.initial_Url)
  
  }

  getVaccinationDetails(){
    return this.http.get(this.vaccine_url)
  }
}
