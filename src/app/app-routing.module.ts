import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './components/pages/homepage/homepage.component';
import { FoodtruckComponent } from './components/partials/foodtruck/foodtruck.component';
import { CarouselComponent } from './components/pages/carousel/carousel.component';
import { ProductPageComponent } from './components/pages/product-page/product-page.component';
import { CartPageComponent } from './components/pages/cart-page/cart-page.component';
import { AccountPageComponent } from './components/pages/account-page/account-page.component';
import { HeaderComponent } from './components/partials/header/header.component';
import { AboutComponent } from './components/pages/about/about.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { CommonModule, NgFor } from '@angular/common';
import { CheckoutPageComponent } from './components/pages/checkout-page/checkout-page.component';
import { LoginComponent } from './components/pages/login/login.component';
import { RegisterComponent } from './components/pages/register/register.component';
import { authGuard } from './guards/auth.guard';


const routes: Routes = [
  {path:'',component:HomepageComponent,
  canActivate: [authGuard]},
  {path:'foodtrucks',component:CarouselComponent,
  canActivate: [authGuard]},
  {path:'foodtrucks/search/:searchTerm',component:CarouselComponent,
  canActivate: [authGuard]},
  {path:'foodtrucks/tag/:tag',component:CarouselComponent,
  canActivate: [authGuard]},
  {path:'foodtrucks/food/:id',component:ProductPageComponent,
  canActivate: [authGuard]},
  {path:'cart',component:CartPageComponent,
  canActivate: [authGuard]},
  {path:'home',component:HomepageComponent,
  canActivate: [authGuard]},
  {path:'about',component:AboutComponent,
  canActivate: [authGuard]},
  {path:'contact',component:ContactComponent,
  canActivate: [authGuard]},
  {path:'checkout',component:CheckoutPageComponent,
  canActivate: [authGuard]},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'accounts',component:AccountPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),CommonModule,NgFor],
  exports: [RouterModule]
})

export class AppRoutingModule { }

