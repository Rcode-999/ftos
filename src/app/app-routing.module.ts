import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './components/pages/homepage/homepage.component';
import { FoodtruckComponent } from './components/partials/foodtruck/foodtruck.component';
import { CarouselComponent } from './components/pages/carousel/carousel.component';
import { ProductPageComponent } from './components/pages/product-page/product-page.component';
import { CartPageComponent } from './components/pages/cart-page/cart-page.component';

const routes: Routes = [
  {path:'',component:HomepageComponent},
  {path:'foodtrucks',component:CarouselComponent},
  {path:'foodtrucks/search/:searchTerm',component:CarouselComponent},
  {path:'foodtrucks/tag/:tag',component:CarouselComponent},
  {path:'foodtrucks/food/:id',component:ProductPageComponent},
  {path:'cart',component:CartPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
