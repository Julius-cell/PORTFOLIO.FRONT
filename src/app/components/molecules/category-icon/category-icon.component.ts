import { Component, Input, OnInit } from '@angular/core';
import { CardIcon } from './category-icon.interface';

@Component({
  selector: 'app-category-icon',
  templateUrl: './category-icon.component.html',
  styleUrls: ['./category-icon.component.css']
})
export class CardIconComponent implements OnInit {

  @Input() categoryIcon: CardIcon;

  baseLinkClass = `font-open block text-center text-14 md:text-16 font-normal`;

  constructor() { }

  ngOnInit(): void {
    console.log(this.categoryIcon);
  }

  handleClick(): void {
    // const { actionUrl, actionType } = this.cardIcon?.link;
    // switch (actionType) {
    //   case ActionTypeEnum.OPEN_URL:
    //     window.open(actionUrl, TargetEnum._BLANK);
    //     break;
    //   case ActionTypeEnum.NAVIGATE:
    //     window.open(actionUrl, TargetEnum._SELF);
    //     break;
    // }
  }
}
