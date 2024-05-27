import { Pipe, PipeTransform } from '@angular/core';
import { format } from 'date-fns';
import Long from 'long';

import { toNumber } from './long';

const formatStr = 'yy-MM-dd HH:mm:ss';
@Pipe({
  name: 'msec',
})
export class MsecPipe implements PipeTransform {
  transform(msec: number | Long | null | undefined, ...args: string[]): string {
    if (!msec) {
      return '';
    }

    return format(toNumber(msec), args && args.length ? args[0] : formatStr);
  }
}
