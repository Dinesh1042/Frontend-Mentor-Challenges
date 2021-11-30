import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { Observable, take } from 'rxjs';
import { ShoppingCart } from 'shared/model/shopping-cart.interface';
import { User } from 'shared/model/user.interface';
import { ShoppingCartService } from 'shared/services/shopping-cart.service';
import { UserService } from 'shared/services/user.service';
import { CheckOutCardComponent } from 'src/app/shopping-cart/components/check-out-card/check-out-card.component';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  user$: Observable<User>;
  shoppingCart: Observable<ShoppingCart>;
  navActive = false;
  navSpyLeft = 0;
  navSpyWidth = 0;
  navSpyActive = false;

  navigationLinks = [
    {
      url: '/',
      name: 'Collections',
    },
    {
      url: '/',
      name: 'Men',
    },
    {
      url: '/',
      name: 'Women',
    },
    {
      url: '/',
      name: 'About',
    },
    {
      url: '/',
      name: 'Contact',
    },
  ];

  @ViewChild('checkOutCard', { read: ViewContainerRef, static: true })
  checkOutCardRef!: ViewContainerRef;

  constructor(userService: UserService, cartService: ShoppingCartService) {
    this.user$ = userService.getUser();
    this.shoppingCart = cartService.getCart();
  }

  mouseOverNav(event: Event) {
    this.navSpyActive = true;
    const targetElement = event.target as HTMLElement;
    const { left, width } = targetElement.getBoundingClientRect();

    this.navSpyLeft =
      left -
      (targetElement.closest('.container')?.getBoundingClientRect().left || 0);
    this.navSpyWidth = width;
  }

  toggleCheckOutCard() {
    if (!this.checkOutCardRef.length) {
      const checkOutCardComponentRef = this.checkOutCardRef.createComponent(
        CheckOutCardComponent
      );

      checkOutCardComponentRef.instance.relativeElementClassName =
        'shopping-cart';

      checkOutCardComponentRef.instance.removeCheckOutCardEvent
        .pipe(take(1))
        .subscribe(() => this.checkOutCardRef.clear());
    } else this.checkOutCardRef.clear();
  }
}
