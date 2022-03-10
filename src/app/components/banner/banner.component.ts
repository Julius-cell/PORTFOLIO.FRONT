import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

import { Banner } from 'src/app/interfaces/page';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
})
export class BannerComponent implements OnChanges {
  @Input() blocks: any[];

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.blocks) {
      const fields = this.blocks;
    }
  }
}
