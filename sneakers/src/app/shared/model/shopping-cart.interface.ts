import {
  ShoppingCartItem,
  ShoppingCartItemInterface,
} from './shopping-cart-item.interface';

export class ShoppingCart {
  shoppingCartItems: ShoppingCartItem[] = [];

  constructor(public shoppingCartMap: ShoppingCartInterface) {
    this.shoppingCartMap = this.shoppingCartMap || {};
    this.initializeCart();
  }

  getCartItem(pid: string) {
    const cartProduct = this.shoppingCartMap[pid];

    return cartProduct ? new ShoppingCartItem(cartProduct, pid) : undefined;
  }

  get cartQuantity() {
    return this.shoppingCartItems.reduce((acc, val) => acc + val.quantity, 0);
  }

  get cartTotal() {
    return this.shoppingCartItems.reduce((acc, val) => acc + val.itemTotal, 0);
  }

  private initializeCart() {
    for (const pid in this.shoppingCartMap)
      this.shoppingCartItems.push(
        new ShoppingCartItem(this.shoppingCartMap[pid], pid)
      );
  }
}

export interface ShoppingCartInterface {
  [pid: string]: {
    product: ShoppingCartItemInterface;
    quantity: number;
  };
}
