import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IconComponent } from './icon/icon.component';
import { RichTextComponent } from './rich-text/rich-text.component';
import { ImageComponent } from './image/image.component';
import { PipeModule } from 'src/app/pipes/pipe.module';
import { ButtonComponent } from './button/button.component';
import { LinkComponent } from './link/link.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    IconComponent,
    RichTextComponent,
    ImageComponent,
    ButtonComponent,
    LinkComponent,
  ],
  imports: [
    CommonModule,
    PipeModule,
    RouterModule
  ],
  exports: [
    IconComponent,
    RichTextComponent,
    ImageComponent,
    ButtonComponent,
    LinkComponent,
  ]
})
export class AtomsModule { }
