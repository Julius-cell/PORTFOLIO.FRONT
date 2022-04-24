import { Component, Input, OnInit } from '@angular/core';

import { Header } from './header.interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [`
    .header {
      background-color: rgba(255,255,255,0);
    }
  `]
})
export class HeaderComponent implements OnInit {
  @Input() header: Header;

  constructor() { }

  ngOnInit(): void {
    // console.log(this.header);
  }



}
