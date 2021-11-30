import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { fromEvent, Subscription } from 'rxjs';
import { filter, first, mapTo } from 'rxjs/operators';
import { ShoppingCartItem } from 'shared/model/shopping-cart-item.interface';
import { ShoppingCart } from 'shared/model/shopping-cart.interface';
import { ShoppingCartService } from 'shared/services/shopping-cart.service';

@Component({
  selector: 'check-out-card',
  templateUrl: './check-out-card.component.html',
  styleUrls: ['./check-out-card.component.scss'],
})
export class CheckOutCardComponent implements OnInit, OnDestroy {
  @Input('relativeElementClassName') relativeElementClassName: string = '';

  shoppingCart?: ShoppingCart;
  removeCheckOutCardEvent = new EventEmitter();

  private subscription = new Subscription();

  constructor(private cartService: ShoppingCartService) {}

  ngOnInit(): void {
    this.subscription.add(
      this.cartService.getCart().subscribe((cart) => (this.shoppingCart = cart))
    );

    fromEvent(document, 'click')
      .pipe(
        filter(
          (e) =>
            !(e.target as HTMLElement).closest(
              `.${this.relativeElementClassName}`
            ) && !(e.target as HTMLElement).closest('.checkout-card')
        ),
        mapTo(true),
        first()
      )
      .subscribe((v) => this.removeCheckOutCardEvent.emit(v));
  }

  removeCartProduct(pid: string) {
    this.cartService.removeCartProduct(pid);
  }

  trackByTitle(_index: number, cartItem: ShoppingCartItem) {
    return cartItem.title;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
