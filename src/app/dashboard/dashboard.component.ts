import { Component, Input, OnInit } from '@angular/core';
import { City } from '../models/city';
import { CityService } from '../services/city.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  @Input() cards: City[] | undefined;

  constructor(private cityService : CityService) { }

  visitCity(city: City) {
    this.cityService.visitNow(city);
  }

}

