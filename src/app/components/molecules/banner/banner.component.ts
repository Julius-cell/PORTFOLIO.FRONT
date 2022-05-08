import { Component, Input, OnInit } from '@angular/core';

import { Banner } from './banner.interface';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
})
export class BannerComponent implements OnInit {
  @Input() banner: Banner;
  @Input() isMobile: boolean;

  constructor() { }

  ngOnInit(): void {
    console.log(this.banner);
  }
}
