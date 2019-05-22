import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { OfferComponent } from './offer/offer.component';
import { DemandComponent } from './demand/demand.component';
import { RaceComponent } from './race/race.component';
import { CarsComponent } from './cars/cars.component';
import { FromNowPipe } from './pipes/from-now.pipe';
import { UppercaseEvenPipe } from './pipes/uppercase-even.pipe';
import { DoNothingDirective } from './directives/do-nothing.directive';
import { ParentComponent } from './pc/parent/parent.component';
import { ChildComponent } from './pc/child/child.component';

@NgModule({
  declarations: [
    AppComponent,
    OfferComponent,
    DemandComponent,
    RaceComponent,
    CarsComponent,
    FromNowPipe,
    UppercaseEvenPipe,
    DoNothingDirective,
    ParentComponent,
    ChildComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
