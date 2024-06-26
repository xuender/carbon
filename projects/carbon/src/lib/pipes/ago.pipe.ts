import { Pipe, PipeTransform } from '@angular/core';
import Long from 'long';

import { toNumber } from './long';

const times = [
  [60, '秒', 1], // 60
  [120, '1分钟前', '1分钟后'], // 60*2
  [3600, '分钟', 60], // 60*60, 60
  [7200, '1小时前', '1小时后'], // 60*60*2
  [86400, '小时', 3600], // 60*60*24, 60*60
  [172800, '昨天', '明天'], // 60*60*24*2
  [604800, '天', 86400], // 60*60*24*7, 60*60*24
  [1209600, '上周', '下周'], // 60*60*24*7*4*2
  [2419200, '周', 604800], // 60*60*24*7*4, 60*60*24*7
  [4838400, '上月', '下月'], // 60*60*24*7*4*2
  [29030400, '月', 2419200], // 60*60*24*7*4*12, 60*60*24*7*4
  [58060800, '去年', '明年'], // 60*60*24*7*4*12*2
  [2903040000, '年', 29030400], // 60*60*24*7*4*12*100, 60*60*24*7*4*12
  [5806080000, '上世纪', '下世纪'], // 60*60*24*7*4*12*100*2
  [58060800000, '世纪', 2903040000], // 60*60*24*7*4*12*100*20, 60*60*24*7*4*12*100
];

@Pipe({
  name: 'ago',
})
export class AgoPipe implements PipeTransform {
  transform(msec: number | Long | null | undefined): string {
    let sec = (Date.now() - toNumber(msec)) / 1000;
    let last = '前';
    let idx = 1;

    if (sec < 0) {
      sec *= -1;
      last = '后';
      idx = 2;
    }

    if (sec < 2) {
      return '刚刚';
    }

    for (const time of times) {
      if (sec < (time[0] as number)) {
        if (typeof time[2] == 'string') {
          return time[idx] as string;
        }

        return `${Math.floor(sec / time[2])}${time[1]}${last}`;
      }
    }

    return '未知';
  }
}
