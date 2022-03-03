import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageComponent } from './components/page/page.component';
import { AuthGuard } from './services/auth/auth-guard.guard';

const routes: Routes = [
  {
    path: '',
    component: PageComponent,
  },
  {
    path: ':first',
    component: PageComponent,
    canActivate: [AuthGuard],
  },
  {
    path: ':first/:second',
    component: PageComponent,
    canActivate: [AuthGuard],
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: '',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      relativeLinkResolution: 'legacy',
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
