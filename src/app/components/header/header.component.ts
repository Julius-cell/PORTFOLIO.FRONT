import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

import { Header } from './header.interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnChanges {
  @Input() header: Header;

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.header) {      
      const fields = this.header;
    }
  }

}
