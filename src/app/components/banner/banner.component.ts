import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

import { Banner } from 'src/app/interfaces/page';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
})
export class BannerComponent implements OnChanges {
  @Input() banner: Banner[];

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.banner) {
      const fields = this.banner;
    }
  }
}
