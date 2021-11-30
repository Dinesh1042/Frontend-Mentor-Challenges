import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from 'shared/model/product.interface';
import { ShoppingCartItem } from 'shared/model/shopping-cart-item.interface';
import { ShoppingCartService } from 'shared/services/shopping-cart.service';

@Component({
  selector: 'product-quantity',
  templateUrl: './product-quantity.component.html',
  styleUrls: ['./product-quantity.component.scss'],
})
export class ProductQuantityComponent implements OnInit, OnDestroy {
  @Input('product') product!: Product;

  shoppingCartItem?: ShoppingCartItem;
  localQuantity = 0;

  private subscription = new Subscription();

  constructor(private cartService: ShoppingCartService) {}

  ngOnInit() {
    this.subscription.add(
      this.cartService
        .getCart()
        .subscribe(
          (cart) => (this.shoppingCartItem = cart.getCartItem(this.product.pid))
        )
    );
  }

  addToCart() {
    if (this.localQuantity > 0) {
      this.cartService.addToCart(this.product, this.localQuantity);
      this.localQuantity = 0;
    }
  }

  increaseProductQuantity() {
    if (this.shoppingCartItem)
      this.cartService.increaseCartProductQuantity(this.product.pid);
    else this.localQuantity++;
  }

  decreaseProductQuantity() {
    if (this.shoppingCartItem) {
      if (this.shoppingCartItem.quantity <= 1) this.localQuantity = 0;
      this.cartService.decreaseCartProductQuantity(this.product.pid);
    } else if (this.localQuantity > 0) this.localQuantity--;
  }

  removeFromCart() {
    if (this.shoppingCartItem) {
      this.cartService.removeCartProduct(this.product.pid);
      this.localQuantity = 0;
    }
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
