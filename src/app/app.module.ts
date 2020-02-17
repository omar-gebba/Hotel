import  { BrowserModule }           from '@angular/platform-browser';
import { NgModule }                 from '@angular/core';

import { AppRoutingModule }         from './app-routing.module';
import { AppComponent }             from './app.component';
import { BrowserAnimationsModule }  from '@angular/platform-browser/animations';
import { MatSliderModule }          from '@angular/material/slider';
import { MaterialModule }           from './material.module';     /// fore angular material modules
import { AccomodationComponent }    from './components/accomodation/accomodation.component';
import { RoomsComponent }           from './components/accomodation/rooms/rooms.component';
import { FoodAndBeverageComponent }    from './components/food-and-beverage/food-and-beverage.component';
import { RestaurantComponent }      from './components/food-and-beverage/restaurant/restaurant.component';
import { DrinksComponent }          from './components/food-and-beverage/drinks/drinks.component';
import { LifestyleComponent }       from './components/lifestyle/lifestyle.component';
import { WelnessAndSpaComponent }   from './components/lifestyle/welness-and-spa/welness-and-spa.component';
import { ResortActivitiesComponent} from './components/lifestyle/resort-activities/resort-activities.component';
import { ExperiencesComponent }     from './components/lifestyle/experiences/experiences.component';
import { ExcursionsComponent }      from './components/lifestyle/excursions/excursions.component';
import { WeddingsComponent }        from './components/weddings/weddings.component';
import { ThaiWeddingsComponent }    from './components/weddings/thai-weddings/thai-weddings.component';
import { WesternsWeddingsComponent} from './components/weddings/westerns-weddings/westerns-weddings.component';
import { CelebrationsComponent }    from './components/celebrations/celebrations.component';
import { OffersComponent }          from './components/offers/offers.component';
import { AuthComponent }            from './components/auth/auth.component';
import { SigninComponent }          from './components/auth/signin/signin.component';
import { SignupComponent }          from './components/auth/signup/signup.component'

@NgModule({
  declarations: [
    AppComponent,
    AccomodationComponent,
    RoomsComponent,
    FoodAndBeverageComponent,
    RestaurantComponent,
    DrinksComponent,
    LifestyleComponent,
    WelnessAndSpaComponent,
    ResortActivitiesComponent,
    ExperiencesComponent,
    ExcursionsComponent,
    WeddingsComponent,
    ThaiWeddingsComponent,
    WesternsWeddingsComponent,
    CelebrationsComponent,
    OffersComponent,
    AuthComponent,
    SigninComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
