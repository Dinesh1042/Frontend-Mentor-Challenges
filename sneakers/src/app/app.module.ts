import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'shared/shared.module';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { ProductComponent } from './product/components/product/product.component';
import { ProductModule } from './product/product.module';
import { ShoppingCartModule } from './shopping-cart/shopping-cart.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    ProductModule,
    CoreModule,
    SharedModule,
    ShoppingCartModule,
    RouterModule.forRoot([
      {
        path: '',
        component: ProductComponent,
      },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
