import { Injectable, OnInit } from '@angular/core';
import { Car } from '../interfaces/car';

@Injectable({
  providedIn: 'root'
})
export class DiversService implements OnInit {
    cars: Car[];

    constructor(
    ) {
        this.cars = [
            {
                brand: 'renault',
                color: 'grey',
                power: 7,
                electric: false
            },
            {
                brand: 'tesla',
                color: 'yellow',
                power: 12,
                electric: true
            },
            {
                brand: 'theo',
                color: 'pink',
                power: 71,
                electric: true
            }
        ];
    }

    ngOnInit(
    ) {
        //
    }

    getCars(): Car[] {
        return this.cars;
    }

    addCar(
        car: Car
    ) {
        this.cars.push(car);
    }
}
