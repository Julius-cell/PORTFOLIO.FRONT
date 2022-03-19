import { Component, Input, OnInit } from '@angular/core';

import { Color } from 'src/app/enums/color';
import { Icon } from '../icon/icon.enum';
import { Swiper } from './swiper.interface';

@Component({
  selector: 'app-swiper',
  templateUrl: './swiper.component.html',
  styleUrls: ['./swiper.component.css']
})
export class SwiperComponent implements OnInit {
  @Input() swiper: Swiper;

  Icon = Icon;
  Color = Color;

  constructor() { }

  ngOnInit(): void {
    console.log(this.swiper);
    // this.setHeight();
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

  setStyles(): any {
    return {
      height: this.setHeight(),
      marginTop: this.setMarginTop(),
      width: '100%',
    }
  }
}
