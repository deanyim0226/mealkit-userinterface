import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';


@NgModule({
  declarations: [ //put all the components used in this application
    AppComponent,
    HeaderComponent,
    FooterComponent,

    LoginPageComponent,
    HomePageComponent,
    SignupPageComponent
  ],
  imports: [  //put all angular features used in this application
    BrowserModule,
    AppRoutingModule,
    FormsModule, //ngModel for two-way binding
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
