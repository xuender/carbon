import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/pipes',
  },
  {
    path: 'pipes',
    loadComponent: () => import('./pipes/pipes.page').then((m) => m.PipesPage),
  },
  {
    path: 'dialog',
    loadComponent: () =>
      import('./dialog/dialog.page').then((m) => m.DialogPage),
  },
  {
    path: 'fp',
    loadComponent: () => import('./fp/fp.page').then((m) => m.FpPage),
  },
  {
    path: 'popover',
    loadComponent: () =>
      import('./popover/popover.page').then((m) => m.PopoverPage),
  },
];
