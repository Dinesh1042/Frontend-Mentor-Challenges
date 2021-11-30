import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Order } from 'shared/model/order.interface';
import { Shipping } from 'shared/model/shipping.interface';
import { ShoppingCart } from 'shared/model/shopping-cart.interface';
import { OrderService } from 'shared/services/order.service';
import { ShoppingCartService } from 'shared/services/shopping-cart.service';

@Component({
  selector: 'check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.scss'],
})
export class CheckOutComponent implements OnInit, OnDestroy {
  shoppingCart?: ShoppingCart;

  private subscriptions = new Subscription();

  constructor(
    private cartService: ShoppingCartService,
    private orderService: OrderService,
    private router: Router
  ) {}

  ngOnInit() {
    this.subscriptions.add(
      this.cartService.getCart().subscribe((cart) => (this.shoppingCart = cart))
    );
  }

  placeOrder(shipping: Shipping) {
    if (this.shoppingCart) {
      const order = new Order({
        shipping,
        products: this.shoppingCart.shoppingCartMap,
      });

      this.orderService.placeOrder(order).subscribe((orderId) => {
        console.log(`OrderId :`, orderId);
        this.router.navigate([`/order-success`, orderId]);
      });
    }
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
}
