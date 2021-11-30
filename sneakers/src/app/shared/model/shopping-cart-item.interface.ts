export class ShoppingCartItem implements ShoppingCartItemInterface {
  company: string;
  title: string;
  offerPrice: number;
  originalPrice: number;
  productImages: string[];
  description: string;
  quantity: number;

  constructor(
    cartProduct: { product: ShoppingCartItemInterface; quantity: number },
    public pid: string
  ) {
    const {
      company,
      title,
      offerPrice,
      originalPrice,
      productImages,
      description,
    } = cartProduct.product;

    this.company = company;
    this.title = title;
    this.offerPrice = offerPrice;
    this.originalPrice = originalPrice;
    this.productImages = productImages;
    this.description = description;
    this.quantity = cartProduct.quantity;
  }

  get itemTotal() {
    return this.quantity * this.price;
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

export interface ShoppingCartItemInterface {
  company: string;
  title: string;
  offerPrice: number;
  originalPrice: number;
  productImages: string[];
  description: string;
}
