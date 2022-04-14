import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AtomsModule } from './atoms/atoms.module';
import { MoleculesModule } from './molecules/molecules.module';
import { OrganismsModule } from './organisms/organisms.module';

import { PageComponent } from './page/page.component';

@NgModule({
  declarations: [
    PageComponent
  ],
  imports: [
    CommonModule,
    MoleculesModule,
    OrganismsModule,
  ],
  exports: [
    PageComponent
  ]
})
export class ComponentsModule { }
