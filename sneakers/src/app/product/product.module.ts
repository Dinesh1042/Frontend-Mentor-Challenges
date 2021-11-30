import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SwiperModule } from 'swiper/angular';

import { ProductCarouselComponent } from './components/product-carousel/product-carousel.component';
import { ProductComponent } from './components/product/product.component';
import { ProductQuantityComponent } from './components/product-quantity/product-quantity.component';
import { ImageViewerComponent } from './components/image-viewer/image-viewer.component';

@NgModule({
  declarations: [ProductComponent, ProductCarouselComponent, ProductQuantityComponent, ImageViewerComponent],
  imports: [CommonModule, SwiperModule],
  exports: [ProductComponent],
})
export class ProductModule {}
