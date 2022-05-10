import { Component, Input, OnInit } from '@angular/core';

import { Color } from 'src/app/shared/enums/color';
import { ContentType } from 'src/app/shared/enums/contentType';
import { Icon } from '../../atoms/icon/icon.enum';
import { Swiper } from './swiper.interface';

import SwiperCore, { Navigation, Pagination, Autoplay, SwiperOptions } from 'swiper';

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

  config: SwiperOptions;

  constructor() { }

  ngOnInit(): void {
    // console.log(this.swiper);
    this.setSwiperConfig();
  }

  setSwiperConfig(): void {
    this.setSwiperBannerConfig();
    this.setSwiperImageConfig();
  }

  setSwiperBannerConfig(): void {
    if (this.swiper.slides.every(el => el.contentTypeId === ContentType.BANNER)) {
      this.config = {
        loop: this.swiper?.loop,
        autoplay: true,
        speed: this.swiper?.speed,
        slidesPerView: this.swiper?.slidesPerViewDesktop,
        pagination: { clickable: true, dynamicBullets: true },
      }
    }
  }

  setSwiperImageConfig(): void {
    if (this.swiper?.slides.every(el => el.contentTypeId === ContentType.IMAGE)) {
      this.config = {
        slidesPerView: this.swiper?.slidesPerViewDesktop,
        spaceBetween: this.swiper?.spaceBetween,
        slidesPerGroup: 1,
        speed: this.swiper?.speed,
        loop: this.swiper?.loop,
        loopFillGroupWithBlank: true,
      }
    }
  }

  initSwiper(swiper: any) {
    // console.log(swiper);
    this.swiperElement = swiper;
    if (this.swiper?.slides && this.swiper?.slides?.length) {
      // this.getPaginationBullets();
    }
  }

  // getPaginationBullets(): void {
  //   const lengthDesktop =
  //     this.swiper?.slides?.length - Math.floor(this.swiper?.slidesPerViewDesktop) + 1;
  //   this.paginationBulletsDesktop = new Array(Math.max(lengthDesktop, 0));
  // }

  // handleStopAutoplay(): void {
  //   this.timeoutAutoplay = setTimeout(() => {
  //     if (this.swiperElement && this.swiperElement.autoplay) {
  //       this.swiperElement.autoplay.start();
  //     }
  //   }, this.swiper?.pausedTime);
  // }

  // handleClickNext(): void {
  //   if (!this.isEnd || this.swiper?.loop) {
  //     this.swiperElement.slideNext(this.swiper?.speed);
  //   }
  // }

  // handleClickPrev(): void {
  //   if (!this.isBeginning || this.swiper?.loop) {
  //     this.swiperElement.slidePrev(this.swiper?.speed);
  //   }
  // }

  // onSlideChange() {
  //   console.log('slide change');
  // }

}
