import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { FoodtrucksService } from 'src/app/services/foodtrucks.service';
import { Product } from 'src/app/shared/models/product';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent {
  product!:Product;

  constructor(activatedRoute:ActivatedRoute, foodService:FoodtrucksService,
    private cartService:CartService, private router:Router){
    activatedRoute.params.subscribe((params) => {
      if(params.id)
      this.product = foodService.getProductsById(params.id);
    })
  }

  addToCart(){
    this.cartService.addToCart(this.product);
    this.router.navigateByUrl('/cart');
  }
}
