import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { HomepageComponent } from './homepage/homepage.component';
import { PaymentComponent } from './payment/payment.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { HomeComponent } from './home/home.component';
import { AddproductsComponent } from './addproducts/addproducts.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { ViewProductComponent } from './view-product/view-product.component';
import { UpdateDialogComponent } from './update-dialog/update-dialog.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { OrderComponent } from './order/order.component';



const routes: Routes = [
  { path: "home", component: HomeComponent},
  { path: "register", component: RegisterUserComponent},
  { path: "login", component: LoginComponent},
  { path: "",component:HomepageComponent},
  { path: "payment",component:PaymentComponent},
  { path: "cartpayment",component:CartPageComponent},
  { path: "addproduct", component: AddproductsComponent},
  { path: "admindashboard", component: AdminDashboardComponent},
  { path: "viewproducts", component: ViewProductComponent},
  { path: "updateproduct", component: UpdateDialogComponent},
  { path: "adminlogin", component: AdminLoginComponent},
  { path: "order", component: OrderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
