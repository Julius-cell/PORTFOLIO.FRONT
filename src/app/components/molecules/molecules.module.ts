import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BannerComponent } from './banner/banner.component';
import { SectionComponent } from './section/section.component';
import { SwiperComponent } from './swiper/swiper.component';
import { AtomsModule } from '../atoms/atoms.module';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    BannerComponent,
    SectionComponent,
    SwiperComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    AtomsModule
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
