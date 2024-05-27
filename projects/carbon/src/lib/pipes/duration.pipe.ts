import { Pipe, PipeTransform } from '@angular/core';
import Long from 'long';

import { toNumber } from './long';

const labels = ['秒', '分钟', '小时', '天', '周', '月', '年', '世纪'];
const times = [
  60,
  60 * 60,
  60 * 60 * 24,
  60 * 60 * 24 * 7,
  60 * 60 * 24 * 7 * 4,
  60 * 60 * 24 * 365,
  60 * 60 * 24 * 365 * 100,
  60 * 60 * 24 * 365 * 100 * 20,
];

@Pipe({
  name: 'duration',
})
export class DurationPipe implements PipeTransform {
  transform(msec: number | Long | null | undefined): string {
    const num = toNumber(msec);
    if (num < 1000) {
      return '无';
    }

    const sec = num / 1000;
    for (let i = 0; i < times.length; i++) {
      if (sec < times[i]) {
        return `${Math.floor(sec / (i == 0 ? 1 : times[i - 1]))}${labels[i]}`;
      }
    }

    return '久远';
  }
}
