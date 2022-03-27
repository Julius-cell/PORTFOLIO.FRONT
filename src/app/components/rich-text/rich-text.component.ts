import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-rich-text',
  templateUrl: './rich-text.component.html',
})
export class RichTextComponent implements OnInit {
  @Input() richText: string;

  ngOnInit(): void {
  }

}
