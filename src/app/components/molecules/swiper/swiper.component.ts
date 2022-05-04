import { Component, Input, OnInit } from '@angular/core';

import { Color } from 'src/app/shared/enums/color';
import { ContentType } from 'src/app/shared/enums/contentType';
import { Icon } from '../../atoms/icon/icon.enum';
import { Swiper } from './swiper.interface';

import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';

SwiperCore.use([Navigation, Pagination, Autoplay]);

@Component({
  selector: 'app-swiper',
  templateUrl: './swiper.component.html',
  styleUrls: ['./swiper.component.css']
})
export class SwiperComponent implements OnInit {
  @Input() swiper: Swiper;

  Icon = Icon;
  Color = Color;
  selectedIndex = 0;

  ContentType = ContentType;
  swiperElement: any;
  paginationBulletsDesktop: number[];
  timeoutAutoplay: number | any;
  isBeginning = true;
  isEnd = false;

  constructor() { }

  ngOnInit(): void {
    console.log(this.swiper);
  }

  initSwiper(swiper: any) {
    console.log(swiper);
    this.swiperElement = swiper;
    if (this.swiper?.slides && this.swiper?.slides?.length) {
      this.getPaginationBullets();
    }
  }

  getPaginationBullets(): void {
    const lengthDesktop =
      this.swiper?.slides?.length - Math.floor(this.swiper?.slidesPerViewDesktop) + 1;
    this.paginationBulletsDesktop = new Array(Math.max(lengthDesktop, 0));
  }

  handleStopAutoplay(): void {
    this.timeoutAutoplay = setTimeout(() => {
      if (this.swiperElement && this.swiperElement.autoplay) {
        this.swiperElement.autoplay.start();
      }
    }, this.swiper?.pausedTime);
  }

  handleClickNext(): void {
    if (!this.isEnd || this.swiper?.loop) {
      this.swiperElement.slideNext(this.swiper?.speed);
    }
  }

  handleClickPrev(): void {
    if (!this.isBeginning || this.swiper?.loop) {
      this.swiperElement.slidePrev(this.swiper?.speed);
    }
  }

  onSlideChange() {
    console.log('slide change');
  }



  setHeight(): string {
    return this.swiper.isFullScreen ? '100vh' : `${this.swiper.height}px`;
  }

  setMarginTop(): string {
    return this.swiper.isFullScreen ? '-80px' : `0px`;
  }

  showIconNavigators(): boolean {
    return this.swiper.slides.length > 1;
  }

  showLeftIcon(): boolean {
    return this.selectedIndex === 0 || !this.showIconNavigators();
  }
  
  showRightIcon(): boolean {
    return this.selectedIndex === this.swiper.slides.length - 1 || !this.showIconNavigators();
  }

  setStyles(): any {
    return {
      height: this.setHeight(),
      marginTop: this.setMarginTop(),
      width: '100%',
    }
  }

  selectImage(index: number): void {
    this.selectedIndex = index;
  }

  // nextImage(): void {
  //   this.selectedIndex = this.selectedIndex + 1;
  // }
  
  // prevImage(): void {
  //   this.selectedIndex = this.selectedIndex - 1;
  // }


}
