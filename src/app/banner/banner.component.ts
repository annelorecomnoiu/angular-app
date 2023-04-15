import { Component } from '@angular/core';
import { City } from '../models/city';
import { CityService } from '../services/city.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent {

  defaultCity:City ={
    name : 'New Adventure',
    description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    image : 'https://images.pexels.com/photos/2859169/pexels-photo-2859169.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  };

  selectedCity!:City;

  constructor(private cityService: CityService){};

  ngOnInit(){
    this.selectedCity = this.defaultCity;
    this.setSelectedCity();
  };

  setSelectedCity() {
      this.cityService.selectedCity.subscribe((city: City) => {
      this.selectedCity = city;
    });
  }

  discoverNow() {
     const url = this.selectedCity.image;
     window.open(url, '_blank');
  }
}


  

