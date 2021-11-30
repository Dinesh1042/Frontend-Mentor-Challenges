import { Shipping } from './shipping.interface';
import { ShoppingCartInterface } from './shopping-cart.interface';

export class Order implements OrderInterface {
  shipping: Shipping;
  products: ShoppingCartInterface;

  constructor(order: OrderInterface) {
    this.shipping = order.shipping;
    this.products = order.products;
  }
}

export interface OrderInterface {
  shipping: Shipping;
  products: ShoppingCartInterface;
}
