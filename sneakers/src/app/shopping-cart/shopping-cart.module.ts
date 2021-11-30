import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { CheckOutCardComponent } from './components/check-out-card/check-out-card.component';
import { CheckOutFormComponent } from './components/check-out-form/check-out-form.component';
import { CheckOutComponent } from './components/check-out/check-out.component';
import { OrderSummaryComponent } from './components/order-summary/order-summary.component';
import { OrderSuccessComponent } from './components/order-success/order-success.component';

@NgModule({
  declarations: [
    CheckOutCardComponent,
    CheckOutComponent,
    CheckOutFormComponent,
    OrderSummaryComponent,
    OrderSuccessComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: 'checkout',
        component: CheckOutComponent,
      },
      {
        path: 'order-success/:orderId',
        component: OrderSuccessComponent,
      },
    ]),
  ],
  exports: [CheckOutCardComponent],
})
export class ShoppingCartModule {}
