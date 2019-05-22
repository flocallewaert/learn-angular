import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demand',
  templateUrl: './demand.component.html',
  styleUrls: ['./demand.component.css']
})
export class DemandComponent implements OnInit {
    user: any;
    constructor(
    ) {
        this.user = {
            name: 'Florian'
        };
    }

    ngOnInit() {
    }
}
