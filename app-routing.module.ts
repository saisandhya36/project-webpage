import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BooksComponent } from './books/books.component';
import { ComputersComponent } from './computers/computers.component';
import { HealthComponent } from './health/health.component';
import { HomeComponent } from './home/home.component';
import { PoliticsComponent } from './politics/politics.component';
import { RentComponent } from './rent/rent.component';
import { ScienceComponent } from './science/science.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { SportsComponent } from './sports/sports.component';
import { TravelComponent } from './travel/travel.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'books',component:BooksComponent},
  {path:'rent',component:RentComponent},
  {path:'about',component:AboutComponent},
  {path:'science',component:ScienceComponent},
  {path:'computers',component:ComputersComponent},
  {path:'sports',component:SportsComponent},
  {path:'health',component:HealthComponent},
  {path:'politics',component:PoliticsComponent},
  {path:'travel',component:TravelComponent},
  {path:'signin',component:SigninComponent},
  {path:'signup',component:SignupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
