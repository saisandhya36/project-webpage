import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BooksComponent } from './books/books.component';
import { RentComponent } from './rent/rent.component';
import { AboutComponent } from './about/about.component';
import { ScienceComponent } from './science/science.component';
import { ComputersComponent } from './computers/computers.component';
import { PoliticsComponent } from './politics/politics.component';
import { SportsComponent } from './sports/sports.component';
import { HealthComponent } from './health/health.component';
import { TravelComponent } from './travel/travel.component';
import { MainComponent } from './main/main.component';
import { ManageComponent } from './manage/manage.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { CartComponent } from './cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BooksComponent,
    RentComponent,
    AboutComponent,
    ScienceComponent,
    ComputersComponent,
    PoliticsComponent,
    SportsComponent,
    HealthComponent,
    TravelComponent,
    MainComponent,
    ManageComponent,
    SigninComponent,
    SignupComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
