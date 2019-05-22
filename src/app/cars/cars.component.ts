import { Component, OnInit } from '@angular/core';
import { DiversService } from '../services/divers.service';
import { Car } from '../interfaces/car';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {
    cars: Car[];
    myText: string;
    otherText: string;

    constructor(
        private divers: DiversService
    ) {
        this.cars = this.divers.getCars();
    }

    ngOnInit() {
        this.myText = 'log message from script';
        this.otherText = 'other log message from script';
    }
    addCar(
        ...carValues: any
    ) {
        const [brand, color, power, electric] = carValues;
        const car = {
            brand,
            color,
            power,
            electric
        };
        // const car = Object.assign({brand, color, power, electric}, carValues);

        this.divers.addCar(car);
    }
    /*
    addCar(
        brand: string,
        color: string,
        power: number,
        electric: boolean
    ) {
        this.cars.push({brand, color, power, electric});
    }
    */
}
