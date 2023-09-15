import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';

import { MsecPipe } from './pipes/msec.pipe';
import { SafeHtmlPipe } from './pipes/safe-html.pipe';
import { PopoverComponent } from './popover/popover.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [MsecPipe, SafeHtmlPipe, PopoverComponent],
  imports: [IonicModule, CommonModule],
  exports: [MsecPipe, SafeHtmlPipe, PopoverComponent],
})
export class CarbonModule {}
