import { Pipe, PipeTransform } from '@angular/core';
import { hashNumber, string2key } from '../hash/siphash';

@Pipe({
  name: 'hash',
})
export class HashPipe implements PipeTransform {
  transform(value: Uint8Array | string | undefined, ...keys: string[]) {
    if (!value) {
      return 0;
    }

    if (keys.length > 0) {
      return hashNumber(value, string2key(keys[0]));
    }

    return hashNumber(value);
  }
}
