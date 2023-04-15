import { Component, Input } from '@angular/core';
import { City } from '../models/city';
import { CityService } from '../services/city.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {

  arrayOfCities:City[] | undefined;

  constructor(private cityService:CityService) { }

  ngOnInit(): void {
    this.arrayOfCities = this.cityService.arrayOfCities;
  }

  filterCities(filter:string){
    this.arrayOfCities = this.cityService.filterCities(filter);
  }
}




