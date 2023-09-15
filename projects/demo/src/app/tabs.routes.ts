import { Routes } from '@angular/router';

import { TabsComponent } from './tabs.component';

export const routes: Routes = [
  {
    path: 'tabs',
    component: TabsComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: '/tabs/pipes',
      },
      {
        path: 'pipes',
        loadComponent: () =>
          import('./pipes/pipes.page').then((m) => m.PipesPage),
      },
      {
        path: 'dialog',
        loadComponent: () =>
          import('./dialog/dialog.page').then((m) => m.DialogPage),
      },
      {
        path: 'popover',
        loadComponent: () =>
          import('./popover/popover.page').then((m) => m.PopoverPage),
      },
    ],
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/tabs/pipes',
  },
];
