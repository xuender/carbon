import { Routes } from '@angular/router';
import { TabsComponent } from './tabs.component';

export const routes: Routes = [
  {
    path: '',
    component: TabsComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'pipes',
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
    ],
  },
];
