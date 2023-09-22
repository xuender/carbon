import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { RouteReuseStrategy, provideRouter } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { CarbonModule } from 'projects/carbon/src/public-api';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    importProvidersFrom(IonicModule.forRoot({})),
    importProvidersFrom(
      CarbonModule.forRoot({ dialog: { header: '测试提示' } })
    ),
    provideRouter(routes),
  ],
};
