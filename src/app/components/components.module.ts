import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageComponent } from './page/page.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BannerComponent } from './banner/banner.component';
import { SectionComponent } from './section/section.component';
import { SwiperComponent } from './swiper/swiper.component';
import { IconComponent } from './icon/icon.component';
import { RichTextComponent } from './rich-text/rich-text.component';

import { PipeModule } from '../pipes/pipe.module';
import { ImageComponent } from './image/image.component';



@NgModule({
  declarations: [
    PageComponent,
    HeaderComponent,
    FooterComponent,
    BannerComponent,
    SectionComponent,
    SwiperComponent,
    IconComponent,
    RichTextComponent,
    ImageComponent,
  ],
  imports: [
    CommonModule,
    PipeModule
  ],
  exports: [
    PageComponent
  ]
})
export class ComponentsModule { }
