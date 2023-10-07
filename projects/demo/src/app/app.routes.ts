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
    path: 'http',
    loadComponent: () => import('./http/http.page').then((m) => m.HttpPage),
  },
  {
    path: 'table',
    loadComponent: () => import('./table/table.page').then((m) => m.TablePage),
  },
  {
    path: 'pagination',
    loadComponent: () =>
      import('./pagination/pagination.page').then((m) => m.PaginationPage),
  },
  {
    path: 'popover',
    loadComponent: () =>
      import('./popover/popover.page').then((m) => m.PopoverPage),
  },
];
