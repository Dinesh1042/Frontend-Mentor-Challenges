import { Product } from './product.interface';

export class Products {
  products: Product[] = [];

  constructor(public productsMap: { [key: string]: ProductInterface } = {}) {
    this.initializeProducts();
  }

  private initializeProducts() {
    for (const pid in this.productsMap)
      this.products.push(new Product(this.productsMap[pid], pid));
  }
}

export interface ProductInterface {
  company: string;
  title: string;
  originalPrice: number;
  offerPrice: number;
  description: string;
  images: string[];
}
