import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FilterRichTextPipe } from './filter-rich-text.pipe';



@NgModule({
  declarations: [
    FilterRichTextPipe
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    FilterRichTextPipe
  ]
})
export class PipeModule { }
