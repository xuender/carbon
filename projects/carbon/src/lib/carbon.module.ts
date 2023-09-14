import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';

import { CarbonComponent } from './carbon.component';
import { MsecPipe } from './msec.pipe';

@NgModule({
  declarations: [CarbonComponent, MsecPipe],
  imports: [IonicModule],
  exports: [CarbonComponent, MsecPipe],
})
export class CarbonModule {}
