import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';

import { CarbonComponent } from './carbon.component';
import { HtmlPipe } from './pipes/html.pipe';
import { MsecPipe } from './pipes/msec.pipe';

@NgModule({
  declarations: [CarbonComponent, MsecPipe, HtmlPipe],
  imports: [IonicModule],
  exports: [CarbonComponent, MsecPipe, HtmlPipe],
})
export class CarbonModule {}
