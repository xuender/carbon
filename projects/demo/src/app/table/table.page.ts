import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';

import {
  CarbonModule,
  TableResult,
  sleep,
} from 'projects/carbon/src/public-api';

const item = { label: '测试', ca: 1695792608805, ua: 1695793608805 };
const data = [item, item, item, item, item, item, item, item, item, item];

@Component({
  selector: 'car-table-page',
  templateUrl: './table.page.html',
  standalone: true,
  imports: [CarbonModule, IonicModule],
})
export class TablePage {
  res1: TableResult = { limit: 10, count: 0, offset: 0, data: [] };
  res2: TableResult = { limit: 10, count: 213, offset: 0, data };
  res3: TableResult = { limit: 10, count: 213, offset: 30, data };
  res4: TableResult = {
    limit: 10,
    count: 213,
    offset: 210,
    data: [item, item, item],
  };

  async to2(offset: number) {
    this.res2.offset = offset;
    const tmp = this.res2;
    this.res2 = Object.assign({}, tmp);
    await sleep(10);
    this.res2 = tmp;
    console.log('to2');
  }

  to3(offset: number) {
    this.res3.offset = offset;
    this.res3 = this.res3;
    console.log('to3');
  }

  to4(offset: number) {
    this.res4.offset = offset;
    this.res4 = this.res4;
    console.log('to4');
  }
}
