import { NgModule } from '@angular/core';
import { ExtraOptions, PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { IsAuthenticatedGuard } from './utils/guards/is-authenticated.guard';
import { IsNotAuthenticatedGuard } from './utils/guards/is-not-authenticated.guard';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'auth' },
      {
        path: 'auth',
        canActivate: [IsNotAuthenticatedGuard],
        loadChildren: (): any =>
          import('./auth/auth.module').then((m) => m.AuthModule),
      },
      {
        path: 'cat',
        canActivate: [IsAuthenticatedGuard],
        loadChildren: (): any =>
          import('./cats/cats.module').then((m) => m.CatsModule),
      },
    ],
  },
];

const routerConfig: ExtraOptions = {
  preloadingStrategy: PreloadAllModules,
  scrollPositionRestoration: 'enabled',
};

@NgModule({
  imports: [RouterModule.forRoot(routes, routerConfig)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
