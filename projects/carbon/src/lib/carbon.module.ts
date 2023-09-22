import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';

import { AgoPipe } from './pipes/ago.pipe';
import { HashPipe } from './pipes/hash.pipe';
import { MsecPipe } from './pipes/msec.pipe';
import { SafeHtmlPipe } from './pipes/safe-html.pipe';
import { PopoverComponent } from './popover/popover.component';

@NgModule({
  declarations: [MsecPipe, SafeHtmlPipe, AgoPipe, HashPipe, PopoverComponent],
  imports: [IonicModule, CommonModule],
  exports: [MsecPipe, SafeHtmlPipe, AgoPipe, HashPipe, PopoverComponent],
})
export class CarbonModule {}
