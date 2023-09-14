import { NgModule } from '@angular/core';
import { CarbonComponent } from './carbon.component';
import { MsecPipe } from './msec.pipe';

@NgModule({
  declarations: [CarbonComponent, MsecPipe],
  imports: [],
  exports: [CarbonComponent, MsecPipe],
})
export class CarbonModule {}
