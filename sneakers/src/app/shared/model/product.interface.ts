import { ProductInterface } from './products.interface';

export class Product {
  company: string;
  title: string;
  originalPrice: number;
  offerPrice: number;
  description: string;
  productImages: string[];

  constructor(product: ProductInterface, public pid: string) {
    this.company = product.company;
    this.title = product.title;
    this.originalPrice = product.originalPrice;
    this.offerPrice = product.offerPrice;
    this.description = product.description;
    this.productImages = product.images;
  }

  get price() {
    return this.offerPrice < this.originalPrice
      ? this.offerPrice
      : this.originalPrice;
  }

  get offerPercentage() {
    return (this.offerPrice / this.originalPrice) * 100;
  }
}
