import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'dashboard',
    loadChildren: () => import( './dashboard/dashboard.module' ).then( m => m.DashboardModule )
  },
  {
    path: 'business',
    loadChildren: () => import( './business/business.module' ).then( m => m.BusinessModule )
  },
  {
    path: '',
    redirectTo: 'business',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
