import { Injectable } from '@angular/core';
import { City } from '../models/city';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CityService {

  selectedCity: Subject<City> = new Subject<City>();

  arrayOfCities: City[] = [
    {
      name: 'Paris',
      image:
        'https://images.pexels.com/photos/2082103/pexels-photo-2082103.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    },
    {
      name: 'New York',
      image:
        'https://images.pexels.com/photos/290386/pexels-photo-290386.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'    
    },
    {
      name: 'Beijing',
      image:
        'https://images.pexels.com/photos/2846001/pexels-photo-2846001.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'
     },
    {
      name: 'Istanbul',
      image:
        'https://images.pexels.com/photos/3684396/pexels-photo-3684396.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'
     },
    {
      name: 'Rome',
      image:
        'https://images.pexels.com/photos/2678456/pexels-photo-2678456.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'
     },

     {
      name: 'London',
      image:
        'https://images.pexels.com/photos/672532/pexels-photo-672532.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'
     }
  ];

  constructor() {} 
  
  visitNow(city: City) {
    this.selectedCity.next(city)
  }

  filterCities(filter: string) {
    if (filter == undefined) {
      return this.arrayOfCities;
    }

    var arrayOfCities = this.arrayOfCities.filter((city) => {
      return city.name.toLowerCase().includes(filter.toLowerCase())
    });
    
    return arrayOfCities;
  } 
}