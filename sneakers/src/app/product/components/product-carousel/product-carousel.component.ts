import { Component, Input, ViewChild, ViewContainerRef } from '@angular/core';
import { take } from 'rxjs';
import { SwiperOptions } from 'swiper';
import { SwiperComponent } from 'swiper/angular';

import { ImageViewerComponent } from '../image-viewer/image-viewer.component';

@Component({
  selector: 'product-carousel',
  templateUrl: './product-carousel.component.html',
  styleUrls: ['./product-carousel.component.scss'],
})
export class ProductCarouselComponent {
  @Input('images') images: string[] = [];

  @ViewChild(SwiperComponent) swiperComponentRef!: SwiperComponent;
  @ViewChild('imageViewerTemplate', { read: ViewContainerRef })
  imageViewContainer!: ViewContainerRef;

  constructor() {}

  activeSlideIndex = 0;
  swiperConfig: SwiperOptions = {
    slidesPerView: 1,
    spaceBetween: 20,
    breakpoints: {
      768: {
        width: 0,
        enabled: false,
      },
    },
  };

  slideNext() {
    this.swiperComponentRef.swiperRef.slideNext(600);
  }

  slidePrev() {
    this.swiperComponentRef.swiperRef.slidePrev(600);
  }

  setSlideIndex(index: number) {
    this.activeSlideIndex = index;
    this.swiperComponentRef.swiperRef.slideTo(index);
  }

  onSlideChange(event: any) {
    this.activeSlideIndex = event.activeIndex;
  }

  openImageViewer() {
    this.imageViewContainer.clear();
    const imageComponentRef =
      this.imageViewContainer.createComponent(ImageViewerComponent);

    imageComponentRef.instance.images = this.images;
    imageComponentRef.instance.currentActiveIndex = this.activeSlideIndex;
    imageComponentRef.instance.closeImageViewer
      .pipe(take(1))
      .subscribe(() => this.imageViewContainer.clear());
  }
}
