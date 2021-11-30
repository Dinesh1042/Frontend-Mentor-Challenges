import { Product } from 'shared/model/product.interface';

export function shoppingCartFactory(product: Product) {
  const {
    company,
    description,
    offerPrice,
    originalPrice,
    productImages,
    title,
  } = product;

  return {
    company,
    description,
    offerPrice,
    originalPrice,
    productImages,
    title,
  };
}
