import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { IonicModule } from '@ionic/angular';

export const appConfig: ApplicationConfig = {
  providers: [importProvidersFrom(IonicModule.forRoot({}))],
};
