import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';

import { DialogService } from 'carbon';
import { Config } from './config';
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
export class CarbonModule {
  static forRoot(config: Config): ModuleWithProviders<CarbonModule> {
    return {
      ngModule: CarbonModule,
      providers: [DialogService, { provide: 'carbonCfg', useValue: config }],
    };
  }
}
