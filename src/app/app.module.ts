import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SpinnerComponent } from './Helpers/spinner/spinner.component';
import { ErrorPageComponent } from './Component/error-page/error-page.component';
import { HomeComponent } from './Component/home/home.component';
import { HeaderComponent } from './Component/header/header.component';
import { FooterComponent } from './Component/footer/footer.component';
import { HeroComponent } from './Component/hero/hero.component';
import { MenuComponent } from './Component/menu/menu.component';
import { BookingComponent } from './Component/booking/booking.component';
import { FoodlistComponent } from './Component/foodlist/foodlist.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { RegisterationComponent } from './Authentication/registeration/registeration.component';
import { LoginComponent } from './Authentication/login/login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    SpinnerComponent,
    ErrorPageComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    HeroComponent,
    MenuComponent,
    BookingComponent,
    FoodlistComponent,
    RegisterationComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    RouterModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
