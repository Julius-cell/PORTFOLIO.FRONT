import { Component, Input, OnInit } from '@angular/core';

import { Banner } from './banner.interface';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  @Input() banner: Banner;
  @Input() isMobile: boolean;
  @Input() extraClass: string;

  constructor() { }

  ngOnInit(): void {
    // console.log(this.banner);
  }
}
