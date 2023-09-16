import { Component } from '@angular/core';
import { IonicModule, PopoverController } from '@ionic/angular';

import {
  CarbonModule,
  DialogService,
  PopoverComponent,
  PopoverItem,
} from '../../../../carbon/src/public-api';

@Component({
  selector: 'car-popover-page',
  templateUrl: './popover.page.html',
  standalone: true,
  imports: [CarbonModule, IonicModule],
})
export class PopoverPage {
  private count = 100;
  private select = true;
  constructor(
    private popoverCtrl: PopoverController,
    private dialogServ: DialogService
  ) {}
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
        checked: this.select,
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
            badge: this.count,
          },
          {
            label: '计数2',
            code: 'count2',
            icon: 'trending-down',
            badge: this.count,
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
    switch (data) {
      case 'count1':
        this.count++;

        break;
      case 'count2':
        this.count--;

        break;
      case 'select':
        this.select = !this.select;

        break;
      default:
        this.dialogServ.toast(`点击: ${data}`);
    }
  }
}
