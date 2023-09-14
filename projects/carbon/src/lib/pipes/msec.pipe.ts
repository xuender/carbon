import { Pipe, PipeTransform } from '@angular/core';
import { format } from 'date-fns';

const formatStr = 'yy-MM-dd HH:mm:ss';

@Pipe({
  name: 'msec',
})
export class MsecPipe implements PipeTransform {
  transform(value: number | undefined, ...args: string[]): string {
    if (!value) {
      return '';
    }

    return format(new Date(value), args && args.length ? args[0] : formatStr);
  }
}
