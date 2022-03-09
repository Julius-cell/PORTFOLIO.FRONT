import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageComponent } from './page/page.component';
import { HeaderComponent } from './header/header.component';



@NgModule({
  declarations: [
    PageComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PageComponent
  ]
})
export class ComponentsModule { }
