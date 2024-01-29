import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
 cartQuantity = 0;

 constructor(cartService:CartService,
  private router:Router,
  private authService:AuthService){
  cartService.getCartObservable().subscribe((newCart) => {
    this.cartQuantity = newCart.totalCount;
  })
 }

 logOut(){
  sessionStorage.clear();
  this.router.navigate(['login'])
  this.authService.setLogInStatus(false);
 }

 
}
