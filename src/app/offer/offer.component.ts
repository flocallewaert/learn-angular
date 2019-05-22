import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-offer',
    templateUrl: './offer.component.html',
    styleUrls: ['./offer.component.css']
})
export class OfferComponent implements OnInit {
    title: string;
    isHidden: boolean;
    isSelected: boolean;
    isUpper: boolean;
    foreground: string;
    background: string;

    constructor(
    ) {
        this.title = 'Offer title';
        this.isHidden = false;
        this.isSelected = true;
        this.isUpper = true;
        this.foreground = 'purple';
        this.background = 'lightgrey';
    }

    isTitle(
    ): boolean {
        return true;
    }

    changeForegroundColor(
        color
    ): void {
        if (
            'string' === typeof color
        ) {
            this.foreground = color;
        }
    }

    changeBackgroundColor(
        color
    ): void {
        if (
            'string' === typeof color
        ) {
            this.background = color;
        }
    }

    onForegroundClick(
        event,
        color
    ) {
        event.stopPropagation();
        this.changeForegroundColor(color);
    }

    // transform to swap
    onBackgroundClick(
        event,
        color
    ) {
        event.stopPropagation();
        this.changeBackgroundColor(color);
    }

    ngOnInit(
    ) {
        //
    }
}
