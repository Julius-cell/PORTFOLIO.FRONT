import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

import { Header } from 'src/app/interfaces/page';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnChanges {
  @Input() header: Header;

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.header) {
      console.log(this.header);
      
      const fields = this.header;
    }
  }

}
