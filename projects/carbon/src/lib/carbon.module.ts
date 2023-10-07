import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { Config } from './config';
import { DialogService } from './dialog.service';
import { LoaderInterceptor } from './http/loader.interceptor';
import { PaginationComponent } from './pagination/pagination.component';
import { AgoPipe } from './pipes/ago.pipe';
import { DurationPipe } from './pipes/duration.pipe';
import { HashPipe } from './pipes/hash.pipe';
import { MsecPipe } from './pipes/msec.pipe';
import { Num2B64Pipe } from './pipes/num2b64.pipe';
import { PipesService } from './pipes/pipes.service';
import { SafeHtmlPipe } from './pipes/safe-html.pipe';
import { PopoverComponent } from './popover/popover.component';
import { TableComponent } from './table/table.component';

@NgModule({
  declarations: [
    MsecPipe,
    SafeHtmlPipe,
    AgoPipe,
    DurationPipe,
    HashPipe,
    Num2B64Pipe,
    PopoverComponent,
    TableComponent,
    PaginationComponent,
  ],
  imports: [IonicModule, CommonModule, RouterLink],
  exports: [
    MsecPipe,
    SafeHtmlPipe,
    AgoPipe,
    DurationPipe,
    HashPipe,
    Num2B64Pipe,
    PopoverComponent,
    TableComponent,
    PaginationComponent,
  ],
})
export class CarbonModule {
  static forRoot(config: Config): ModuleWithProviders<CarbonModule> {
    return {
      ngModule: CarbonModule,
      providers: [
        {
          provide: HTTP_INTERCEPTORS,
          useClass: LoaderInterceptor,
          multi: true,
        },
        DialogService,
        PipesService,
        { provide: 'carbonCfg', useValue: config },
      ],
    };
  }
}
