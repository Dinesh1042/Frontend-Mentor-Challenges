import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Order } from 'shared/model/order.interface';

import { ShoppingCartService } from './shopping-cart.service';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  constructor(private cartService: ShoppingCartService) {}

  placeOrder(order: Order) {
    console.log(`Order Placed Successfully!`, order);
    this.cartService.removeCart();

    return of(Math.random().toString(16).substr(3, 12));
  }
}
