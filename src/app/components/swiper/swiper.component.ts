import { Component, Input, OnInit } from '@angular/core';

import { Color } from 'src/app/shared/enums/color';
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
  selectedIndex = 0;

  constructor() { }

  ngOnInit(): void {
    // console.log(this.swiper);
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

  nextImage(): void {
    this.selectedIndex = this.selectedIndex + 1;
  }
  
  prevImage(): void {
    this.selectedIndex = this.selectedIndex - 1;
  }
}
