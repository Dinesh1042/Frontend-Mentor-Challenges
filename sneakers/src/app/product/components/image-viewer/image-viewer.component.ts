import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { SwiperComponent } from 'swiper/angular';

@Component({
  selector: 'image-viewer',
  templateUrl: './image-viewer.component.html',
  styleUrls: ['./image-viewer.component.scss'],
})
export class ImageViewerComponent implements AfterViewInit {
  @Input('images') images: string[] = [];
  @Input('currentActiveIndex') currentActiveIndex = 0;

  @Output('closeImageViewer') closeImageViewer = new EventEmitter<true>();

  @ViewChild(SwiperComponent, { static: true })
  swiperComponentRef!: SwiperComponent;

  constructor(private changeDetectorRef: ChangeDetectorRef) {}

  nextSlide() {
    this.swiperComponentRef.swiperRef.slideNext();
  }

  slidePrev() {
    this.swiperComponentRef.swiperRef.slidePrev();
  }

  onSlideChange(index: number) {
    this.currentActiveIndex = index;
    this.changeDetectorRef.detectChanges();
  }

  changeSlide(index: number) {
    this.swiperComponentRef.swiperRef.slideTo(index, 600);
  }

  ngAfterViewInit() {
    this.changeSlide(this.currentActiveIndex);
  }
}
