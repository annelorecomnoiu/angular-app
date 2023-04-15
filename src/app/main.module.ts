import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainRoutingModule } from './main-routing.module';
import { CityCardComponent } from './city-card/city-card.component';
import { FormsModule } from '@angular/forms';
import { InfoComponent } from './info/info.component';
import { SearchComponent } from './search/search.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BannerComponent } from './banner/banner.component';
import { MainComponent } from './main/main.component';


@NgModule({
  declarations: [
    CityCardComponent,
    InfoComponent,
    SearchComponent,
    DashboardComponent,
    BannerComponent,
    MainComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    MainRoutingModule
    
  ]
})
export class MainModule { }
