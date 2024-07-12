import {
  ApplicationConfig,
  importProvidersFrom,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter, RouteReuseStrategy } from '@angular/router';

import {
  IonicRouteStrategy,
  provideIonicAngular,
} from '@ionic/angular/standalone';
import { CarbonModule } from 'projects/carbon/src/public-api';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    // importProvidersFrom(IonicModule.forRoot({})),
    importProvidersFrom(
      CarbonModule.forRoot({
        dialog: { header: '测试提示' },
        http: { waitMessage: '不要急慢慢来' },
      }),
    ),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideIonicAngular(),
    provideRouter(routes),
  ],
};
