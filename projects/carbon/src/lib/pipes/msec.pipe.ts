import { Pipe, PipeTransform } from '@angular/core';
import { format } from 'date-fns';

const formatStr = 'yy-MM-dd HH:mm:ss';
@Pipe({
  name: 'msec',
})
export class MsecPipe implements PipeTransform {
  transform(msec: number | undefined, ...args: string[]): string {
    if (!msec) {
      return '';
    }

    return format(msec, args && args.length ? args[0] : formatStr);
  }
}
