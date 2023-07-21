import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TopBlockCardComponent } from './top-block-card/top-block-card.component';
import { LoaderComponent } from './loader/loader.component';
import { NgChartsModule } from 'ng2-charts';
import { Chart } from 'chart.js/dist';
import { VaccinationTrendsComponent } from './vaccination-trends/vaccination-trends.component';
import { FormsModule } from '@angular/forms';
import { VaccinationByTypeComponent } from './vaccination-by-type/vaccination-by-type.component';
import { VaccinationByAgeComponent } from './vaccination-by-age/vaccination-by-age.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TopBlockCardComponent,
    LoaderComponent,
    VaccinationTrendsComponent,
    VaccinationByTypeComponent,
    VaccinationByAgeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgChartsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
