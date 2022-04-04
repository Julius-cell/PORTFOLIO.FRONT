import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

import { Footer } from './footer.interface';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnChanges {
  @Input() footer: Footer;

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.footer) {
      console.log(this.footer);
      const fields = this.footer;
    }
  }

}
