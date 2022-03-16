import { Component, Input, OnInit } from '@angular/core';

import { Section } from './section.interface';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
})
export class SectionComponent implements OnInit {
  @Input() section: Section;

  constructor() { }
  
  ngOnInit(): void {
    console.log(this.section);
  }

}
