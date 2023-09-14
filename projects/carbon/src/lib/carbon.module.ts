import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';

import { MsecPipe } from './pipes/msec.pipe';
import { SafeHtmlPipe } from './pipes/safe-html.pipe';

@NgModule({
  declarations: [MsecPipe, SafeHtmlPipe],
  imports: [IonicModule],
  exports: [MsecPipe, SafeHtmlPipe],
})
export class CarbonModule {}
