import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IconComponent } from './icon/icon.component';
import { RichTextComponent } from './rich-text/rich-text.component';
import { ImageComponent } from './image/image.component';
import { PipeModule } from 'src/app/pipes/pipe.module';
import { ButtonComponent } from './button/button.component';

@NgModule({
  declarations: [
    IconComponent,
    RichTextComponent,
    ImageComponent,
    ButtonComponent,
  ],
  imports: [
    CommonModule,
    PipeModule
  ],
  exports: [
    IconComponent,
    RichTextComponent,
    ImageComponent,
  ]
})
export class AtomsModule { }
