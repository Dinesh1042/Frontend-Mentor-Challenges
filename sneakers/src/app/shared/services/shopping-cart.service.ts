import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';
import { shoppingCartFactory } from 'shared/helper/cart-factory';
import { Product } from 'shared/model/product.interface';
import {
  ShoppingCart,
  ShoppingCartInterface,
} from 'shared/model/shopping-cart.interface';

@Injectable({
  providedIn: 'root',
})
export class ShoppingCartService {
  private CART_KEY = 'sneaker_cart';
  private cartSubject = new BehaviorSubject<ShoppingCartInterface>(
    this.getLocalCart()
  );

  constructor() {}

  getCart() {
    return this.cartSubject
      .asObservable()
      .pipe(map((cart) => new ShoppingCart(cart)));
  }

  addToCart(product: Product, quantity: number) {
    const shoppingCartProduct = {
      [product.pid]: { product: shoppingCartFactory(product), quantity },
    };

    const localCart = this.getLocalCart();

    if (!localCart[product.pid]) {
      const updatedCart = { ...localCart, ...shoppingCartProduct };
      return this.updateCart(updatedCart, 'Product Added to cart');
    } else throw new Error('Already added to cart');
  }

  increaseCartProductQuantity(pid: string) {
    return this.modifyCartProductQuantity(pid, 1);
  }

  decreaseCartProductQuantity(pid: string) {
    return this.modifyCartProductQuantity(pid, -1);
  }

  removeCartProduct(pid: string) {
    const localCart = this.getLocalCart();
    delete localCart[pid];
    return this.updateCart(localCart, 'Product deleted from cart');
  }

  removeCart() {
    localStorage.removeItem(this.CART_KEY);
    this.cartSubject.next({});
  }

  private modifyCartProductQuantity(pid: string, count: 1 | -1) {
    const localCart = this.getLocalCart();
    const cartProduct = localCart[pid];

    if (cartProduct) {
      const quantity = cartProduct.quantity + count;

      if (quantity > 0) {
        const updatedCart: ShoppingCartInterface = {
          ...localCart,
          [pid]: { ...cartProduct, quantity },
        };

        return this.updateCart(updatedCart, 'Product Added to cart');
      } else return this.removeCartProduct(pid);
    } else throw new Error('Product has not added to the cart');
  }

  private updateCart(cart: ShoppingCartInterface, message: string) {
    this.saveCart(cart);
    this.cartSubject.next(cart);
    return message;
  }

  private getLocalCart(): ShoppingCartInterface {
    return JSON.parse(localStorage.getItem(this.CART_KEY) || '{}');
  }

  private saveCart(value: ShoppingCartInterface) {
    localStorage.setItem(this.CART_KEY, JSON.stringify(value));
  }
}
