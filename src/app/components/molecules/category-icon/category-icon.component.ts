import { Component, Input, OnInit } from '@angular/core';

import { Image } from '../../atoms/image/image.interface';

@Component({
  selector: 'app-category-icon',
  templateUrl: './category-icon.component.html',
  styleUrls: ['./category-icon.component.css']
})
export class CardIconComponent implements OnInit {
  @Input() categoryIcon: Image;

  constructor() { }

  ngOnInit(): void {
    console.log(this.categoryIcon);
  }

  handleClick(): void {
    const { actionUrl, actionType } = this.categoryIcon;
    window.open(actionUrl, actionType);
  }
}
