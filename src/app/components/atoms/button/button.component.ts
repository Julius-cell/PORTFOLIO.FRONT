import { Component, Input, OnInit } from '@angular/core';

import { ButtonType } from 'src/app/shared/enums/buttonType';
import { Button } from './button.interface';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Input() button: Button;

  buttonType = ButtonType;

  constructor() { }

  ngOnInit(): void {
    // console.log(this.button);
  }

  handleClick(): void {
    if (this.button?.actionType) {
      window.open(this.button.actionUrl, this.button.actionType);
    }
  }
}
