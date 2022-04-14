import { Component, Input, OnInit } from '@angular/core';

import { Icon } from './icon.enum';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styles: [`
  ion-icon {
    color: red;
  }
  `]
})
export class IconComponent implements OnInit {
  @Input() icon: Icon;
  @Input() height = '20px';
  @Input() width = '20px';
  @Input() color: string;

  Icon = Icon;

  constructor() { }

  ngOnInit(): void {
  }

}
