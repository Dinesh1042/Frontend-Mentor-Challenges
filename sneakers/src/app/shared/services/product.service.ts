import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';

import { Product } from '../model/product.interface';
import { ProductInterface, Products } from '../model/products.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor() {}

  getProducts() {
    return products$.pipe(map((products) => new Products(products)));
  }

  getProduct(id: string) {
    return products$.pipe(map((products) => new Product(products[id], id)));
  }
}

// Mocking Product Data

const products$: Observable<{ [key: string]: ProductInterface }> = of({
  FRONTEND_MENTOR: {
    company: 'Sneaker Company',
    title: 'Fall Limited Edition Sneakers',
    originalPrice: 250,
    offerPrice: 125,
    images: Array.from(
      { length: 4 },
      (_, i) => `assets/carousel/img-${i + 1}.jpg`
    ),
    description:
      'These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.',
  },
});
