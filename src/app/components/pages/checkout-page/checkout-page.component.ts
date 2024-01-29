import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { CartService } from 'src/app/services/cart.service';
import { Cart } from 'src/app/shared/models/cart';
import { Product } from 'src/app/shared/models/product';
import { UserHistory } from 'src/app/shared/models/userhistory';

@Component({
  selector: 'app-checkout-page',
  templateUrl: './checkout-page.component.html',
  styleUrl: './checkout-page.component.css'
})
export class CheckoutPageComponent implements OnInit {
  lastButtonClickDate: Date | null = null;
  private baseUrl = "http://localhost:3000";
  userHistory!:UserHistory;
  cart!:Cart;
  constructor(private cartService:CartService,
    private http:HttpClient,
    private messageService:MessageService){
    this.cartService.getCartObservable().subscribe((cart) => {
      this.cart = cart;
    })
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
 
  email = sessionStorage.getItem('email');
  saveUserHistory(){
    if (!this.userHistory) {
      this.userHistory = new UserHistory();
    }
    this.lastButtonClickDate = new Date();
    this.userHistory.date = this.lastButtonClickDate;
    if(this.email != null)
    this.userHistory.email = this.email;
    this.userHistory.products = this.cart.items.map(cartItem => cartItem.product);
    
    return this.http.post(`${this.baseUrl}/usersHistory`,this.userHistory).subscribe(
      response => {
        console.log(response)
        this.messageService.add({severity:'success', summary:'Success', detail:'Register successfully'});
      },
      error =>{
        this.messageService.add({severity:'error', summary:'Error', detail:'Something went wrong'});
      }
    );
  }
}
