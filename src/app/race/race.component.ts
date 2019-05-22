import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-race',
  templateUrl: './race.component.html',
  styleUrls: ['./race.component.css']
})
export class RaceComponent implements OnInit {

    racers: string[];

    constructor(
        private title: Title,
        private meta: Meta
    ) {
        this.title.setTitle('Awesome Race');
        this.meta.addTag({'name': 'author', 'content': 'Florian'});
    }

    ngOnInit(
    ) {
        this.racers = [];
    }

    addRacer(
        name: string
    ) {
        this.racers.push(name);
    }

    removeRacer(
        index: number
    ) {
        this.racers.splice(index, 1);
    }

}
