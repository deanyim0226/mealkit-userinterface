import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';
import { MealkitPageComponent } from './pages/mealkit-page/mealkit-page.component';
import { AdminPageComponent } from './pages/admin-page/admin-page.component';
import { ViewUsersComponent } from './pages/admin-page/view-users/view-users.component';
import { ViewAdminComponent } from './pages/admin-page/view-admin/view-admin.component';
import { ViewOrdersComponent } from './pages/admin-page/view-orders/view-orders.component';
import { AddCategoryComponent } from './pages/admin-page/add-category/add-category.component';
import { AddFoodComponent } from './pages/admin-page/add-food/add-food.component';
import { ViewFoodComponent } from './pages/admin-page/view-food/view-food.component';


const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'login', component: LoginPageComponent},
  {path: 'signup', component: SignupPageComponent},
  {path: 'mealkit', component: MealkitPageComponent},

  {path: 'admin/dashboard', component: AdminPageComponent},
  {path: 'admin/dashboard/users', component: ViewUsersComponent},
  {path: 'admin/dashboard/admin', component: ViewAdminComponent},
  {path: 'admin/dashboard/orders', component: ViewOrdersComponent},
  {path: 'admin/dashboard/food', component: ViewFoodComponent},
  {path: 'admin/dashboard/addCategory', component: AddCategoryComponent},
  {path: 'admin/dashboard/addFood', component: AddFoodComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
