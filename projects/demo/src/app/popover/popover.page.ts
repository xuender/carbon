import { Component } from '@angular/core';
import { IonicModule, PopoverController } from '@ionic/angular';

import {
  CarbonModule,
  PopoverComponent,
  PopoverItem,
  PopoverOptions,
} from '../../../../carbon/src/public-api';

@Component({
  selector: 'car-popover-page',
  templateUrl: './popover.page.html',
  standalone: true,
  imports: [CarbonModule, IonicModule],
})
export class PopoverPage {
  constructor(private popoverCtrl: PopoverController) {}
  async open(event: Event) {
    const items: PopoverItem[] = [
      {
        label: '增加',
        code: 'add',
        icon: 'add',
        itemColor: 'success',
      },
      {
        label: '删除',
        code: 'del',
        icon: 'trash',
        color: 'danger',
        iconColor: 'danger',
      },
      {
        label: '选择',
        code: 'select',
        icon: 'checkbox',
        checked: true,
      },
      {
        label: '子菜单',
        code: 'c1',
        icon: 'ellipsis-horizontal',
        children: [
          {
            label: '计数1',
            code: 'count1',
            icon: 'trending-up',
            badge: 32,
          },
          {
            label: '计数2',
            code: 'count2',
            icon: 'trending-down',
            badge: 12,
          },
        ],
      },
    ];

    const popover = await this.popoverCtrl.create({
      component: PopoverComponent,
      translucent: true,
      event,
      componentProps: {
        options: {
          title: '更多功能',
          items,
        },
      },
    });
    popover.present();
    const { data } = await popover.onDidDismiss();
    console.log(data);
  }
}
