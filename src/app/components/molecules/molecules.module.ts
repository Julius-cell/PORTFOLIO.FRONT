import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BannerComponent } from './banner/banner.component';
import { CardComponent } from './card/card.component';
import { CardIconComponent } from './category-icon/category-icon.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { SectionComponent } from './section/section.component';
import { SwiperComponent } from './swiper/swiper.component';

import { AtomsModule } from '../atoms/atoms.module';
import { SwiperModule } from 'swiper/angular';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    BannerComponent,
    SectionComponent,
    SwiperComponent,
    CardComponent,
    CardIconComponent
  ],
  imports: [
    CommonModule,
    AtomsModule,
    SwiperModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    BannerComponent,
    SectionComponent,
    SwiperComponent
  ]
})
export class MoleculesModule { }
