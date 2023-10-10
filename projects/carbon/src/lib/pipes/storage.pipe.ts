import { Pipe, PipeTransform } from '@angular/core';

const units = 'BKMGTP'.split('');
const kilo = 1024;
@Pipe({
  name: 'storage',
})
export class StoragePipe implements PipeTransform {
  transform(size: number | undefined): string {
    if (!size) {
      return '0B';
    }

    let num = size as number;
    let unit = 0;

    let w = Math.floor((num * 100) / kilo) / 100;
    while (w > 0) {
      unit++;
      num = w;
      w = Math.floor((num * 100) / kilo) / 100;
    }

    return `${num % kilo}${units[unit]}`;
  }
}
