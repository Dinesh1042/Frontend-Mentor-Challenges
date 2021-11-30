import { Component, Input } from '@angular/core';
import { ShoppingCart } from 'shared/model/shopping-cart.interface';

@Component({
  selector: 'order-summary',
  templateUrl: './order-summary.component.html',
  styleUrls: ['./order-summary.component.scss'],
})
export class OrderSummaryComponent {
  @Input('shoppingCart') shoppingCart!: ShoppingCart;
  constructor() {}
}
