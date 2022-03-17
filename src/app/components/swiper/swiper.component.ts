import { Component, Input, OnInit } from '@angular/core';

import { Swiper } from './swiper.interface';

@Component({
  selector: 'app-swiper',
  templateUrl: './swiper.component.html',
  styles: [`
    img {
      width: inherit;
      height: inherit;
      object-fit: cover;
    }
  `]
})
export class SwiperComponent implements OnInit {
  @Input() swiper: Swiper;

  constructor() { }

  ngOnInit(): void {
    console.log(this.swiper);
    this.setHeight();
  }

  setHeight(): string {
    return this.swiper.isFullScreen ? '100vh' : `${this.swiper.height}px`;
  }

  setMarginTop(): string {
    return this.swiper.isFullScreen ? '-80px' : `0px`;
  }

  setStyles(): any {
    return {
      height: this.setHeight(),
      marginTop: this.setMarginTop(),
      width: '100%'
    }
  }
}
