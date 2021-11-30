import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'shared/model/product.interface';
import { ProductService } from 'shared/services/product.service';

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent {
  product$: Observable<Product>;

  constructor(private productService: ProductService) {
    this.product$ = this.productService.getProduct('FRONTEND_MENTOR');
  }
}
