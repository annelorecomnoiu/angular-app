import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { City } from '../models/city';
import { CityService } from '../services/city.service';

@Component({
  selector: 'app-city-card',
  templateUrl: './city-card.component.html',
  styleUrls: ['./city-card.component.scss']
})
export class CityCardComponent {

  @Input() city!: City;
  @Output() cityEmitter: EventEmitter<City> = new EventEmitter<City>();

  constructor(private cityService: CityService) { }

  emitCity() {
    this.cityEmitter.emit(this.city);
  }
}




