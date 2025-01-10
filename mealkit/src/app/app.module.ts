import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';
import { MealkitPageComponent } from './pages/mealkit-page/mealkit-page.component';
import { DeliveryPageComponent } from './pages/delivery-page/delivery-page.component';
import { AdminPageComponent } from './pages/admin-page/admin-page.component';
import { HttpClient, HttpClientModule, provideHttpClient } from '@angular/common/http';
import { AddFoodComponent } from './pages/admin-page/add-food/add-food.component';
import { AddCategoryComponent } from './pages/admin-page/add-category/add-category.component';
import { ViewFoodComponent } from './pages/admin-page/view-food/view-food.component';
import { ViewAdminComponent } from './pages/admin-page/view-admin/view-admin.component';
import { ViewUsersComponent } from './pages/admin-page/view-users/view-users.component';
import { ViewOrdersComponent } from './pages/admin-page/view-orders/view-orders.component';
import { CarouselComponent } from './components/carousel/carousel.component';


@NgModule({
  declarations: [ //put all the components used in this application
    AppComponent,
    HeaderComponent,
    FooterComponent,

    LoginPageComponent,
    HomePageComponent,
    SignupPageComponent,
    MealkitPageComponent,
    DeliveryPageComponent,

    AdminPageComponent,
    AddFoodComponent,
    AddCategoryComponent,
    ViewFoodComponent,
    ViewAdminComponent,
    ViewUsersComponent,
    ViewOrdersComponent,
    CarouselComponent

  ],
  imports: [  //put all angular features used in this application
    BrowserModule,
    AppRoutingModule,
    FormsModule, //ngModel for two-way binding
    
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent]
})
export class AppModule { }
