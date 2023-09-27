import { Injectable } from '@angular/core';

import { AgoPipe } from './ago.pipe';
import { DurationPipe } from './duration.pipe';
import { HashPipe } from './hash.pipe';
import { MsecPipe } from './msec.pipe';
import { Num2B64Pipe } from './num2b64.pipe';

@Injectable({
  providedIn: 'root',
})
export class PipesService {
  private ago = new AgoPipe();
  private duration = new DurationPipe();
  private hash = new HashPipe();
  private msec = new MsecPipe();
  private num2b64 = new Num2B64Pipe();

  transform(val: any, key: string) {
    switch (key) {
      case 'ago':
        return this.ago.transform(val);
      case 'duration':
        return this.duration.transform(val);
      case 'hash':
        return this.hash.transform(val);
      case 'msec':
        return this.msec.transform(val);
      case 'num2b64':
        return this.num2b64.transform(val);
      default:
        return val;
    }
  }
}
