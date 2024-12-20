import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [ //put all the components used in this application
    AppComponent,
    HeaderComponent,
    FooterComponent
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
