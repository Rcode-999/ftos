import { Injectable } from '@angular/core';
import { Cart } from '../shared/models/cart';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from '../shared/models/product';
import { CartItem } from '../shared/models/cartitem';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart:Cart = this.getCartFromLocalStorage();
  private cartSubject: BehaviorSubject<Cart> = new BehaviorSubject(this.cart);
  constructor() { }


  addToCart(product:Product):void{
    let cartitem = this.cart.items.find(item => item.product.id === product.id);
    if(cartitem)
    return;

    this.cart.items.push(new CartItem(product));
    this.setCartToLocalStorage();
  }

  removeFromCart(prdId:number):void{
    this.cart.items = this.cart.items
    .filter(item => item.product.id != prdId);
    this.setCartToLocalStorage();
  }

  changeQuantity(prdId:number, quantity:number){
    let cartitem = this.cart.items.find(item => item.product.id === prdId);
    if(!cartitem) return;

    cartitem.quantity = quantity;
    cartitem.price = quantity * cartitem.product.price;
    this.setCartToLocalStorage();
  }

  clearCart(){
    this.cart = new Cart();
    this.setCartToLocalStorage();
  }

  getCartObservable():Observable<Cart>{
    return this.cartSubject.asObservable();
  }

  private setCartToLocalStorage():void{
    this.cart.totalPrice = this.cart.items.reduce((prevSum, currentItem) =>  prevSum + currentItem.price,0);
    this.cart.totalCount = this.cart.items.reduce((prevSum, currentItem) => prevSum + currentItem.quantity,0);

    const cartJSON = JSON.stringify(this.cart);
    localStorage.setItem('Cart',cartJSON);
    
    this.cartSubject.next(this.cart);
  }

  private getCartFromLocalStorage():Cart{
    const cartJSON = localStorage.getItem('Cart');
    return cartJSON? JSON.parse(cartJSON): new Cart();
  }
}
