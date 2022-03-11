import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageComponent } from './page/page.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BannerComponent } from './banner/banner.component';
import { SectionComponent } from './section/section.component';



@NgModule({
  declarations: [
    PageComponent,
    HeaderComponent,
    FooterComponent,
    BannerComponent,
    SectionComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PageComponent
  ]
})
export class ComponentsModule { }
