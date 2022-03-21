import { Component, Input, OnInit } from '@angular/core';

import { getSizes } from 'src/app/shared/utils/get-sizes';
import { Section } from './section.interface';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent implements OnInit {
  @Input() section: Section;

  constructor() { }
  
  ngOnInit(): void {
    console.log(this.section);
  }

  setSpacing(): any {
    return {
      padding: `0 ${this.getPadding()}`,
      'marginTop': this.getMarginTop(),
      'marginBottom': this.getMarginBottom()
    }
  }

  setGrid(): any {
    return {
      display: 'grid',
      'gridTemplateColumns': this.getColumns(),
      'columnGap': this.getGap(),
    }
  }

  getColumns(): string {
    return `repeat(${this.section.columns}, 1fr)`;
  }

  getGap(): string {
    return `${this.section.gapDesktop}px`;
  }

  getPadding(): string {
    return getSizes(this.section.padding);
  }
  
  getMarginTop(): string {
    return getSizes(this.section.marginTop);
  }

  getMarginBottom(): string {
    return getSizes(this.section.marginBottom);
  }

}
