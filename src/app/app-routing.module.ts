import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'paypal-web',
    pathMatch: 'full'
  },
  {
    path: 'paypal',
    loadChildren: () => import('./paypal/paypal.module').then(m => m.PaypalPageModule)
  },
  {
    path: 'paypal-web',
    loadChildren: () => import('./paypal-web/paypal.module').then(m => m.PaypalPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
