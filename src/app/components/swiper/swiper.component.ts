import { Component, Input, OnInit } from '@angular/core';

import { Swiper } from './swiper.interface';

@Component({
  selector: 'app-swiper',
  templateUrl: './swiper.component.html',
})
export class SwiperComponent implements OnInit {
  @Input() swiper: Swiper;

  constructor() { }

  ngOnInit(): void {
    console.log(this.swiper);
  }
}
