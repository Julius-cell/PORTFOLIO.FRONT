import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

import { Section } from 'src/app/interfaces/page';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
})
export class SectionComponent implements OnChanges {
  @Input() section: Section[];

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.section) {
      const fields = this.section;
    }
  }

}
