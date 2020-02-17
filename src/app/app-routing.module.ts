import { NgModule }                   from '@angular/core';
import { Routes, RouterModule }       from '@angular/router';
import { AccomodationComponent }      from './components/accomodation/accomodation.component';
import { CelebrationsComponent }      from './components/celebrations/celebrations.component';
import { FoodAndBeverageComponent }   from './components/food-and-beverage/food-and-beverage.component';
import { LifestyleComponent }         from './components/lifestyle/lifestyle.component';
import { OffersComponent }            from './components/offers/offers.component';
import { WeddingsComponent }          from './components/weddings/weddings.component';
import { SigninComponent }            from './components/auth/signin/signin.component';
import { SignupComponent }            from './components/auth/signup/signup.component';


const routes: Routes = [
  { path: 'accomodation',       component: AccomodationComponent },
  { path: 'celebrations',       component: CelebrationsComponent },
  { path: 'food-and-beverage',  component: FoodAndBeverageComponent },
  { path: 'lifestyle',          component: LifestyleComponent },
  { path: 'offers',             component: OffersComponent },
  { path: 'weddings',           component: WeddingsComponent },
  { path: 'signin',             component: SigninComponent },
  { path: 'signup',             component: SignupComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
