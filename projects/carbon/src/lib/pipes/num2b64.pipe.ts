import { Pipe, PipeTransform } from '@angular/core';

import { numToB64 } from '../b64/b64';

@Pipe({
  name: 'num2b64',
})
export class Num2B64Pipe implements PipeTransform {
  transform(num: number | undefined): string {
    if (num === undefined) {
      return '';
    }

    return numToB64(num);
  }
}
