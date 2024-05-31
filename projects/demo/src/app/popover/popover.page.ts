import { Component } from '@angular/core';
import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonMenuButton,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';

import { PopoverService } from 'projects/carbon/src/lib/popover/popover.service';
import {
  CarbonModule,
  DialogService,
  PopoverItem,
} from 'projects/carbon/src/public-api';

@Component({
  selector: 'car-popover-page',
  templateUrl: './popover.page.html',
  standalone: true,
  imports: [
    CarbonModule,
    IonHeader,
    IonToolbar,
    IonButtons,
    IonMenuButton,
    IonBackButton,
    IonTitle,
    IonButton,
    IonIcon,
    IonContent,
    IonList,
    IonItem,
    IonLabel,
  ],
})
export class PopoverPage {
  private count = 100;
  private select = true;
  constructor(
    private popoverServ: PopoverService,
    private dialogServ: DialogService,
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

    const item = await this.popoverServ.open(event, {
      title: '更多功能',
      items,
    });

    if (!item) {
      return;
    }

    switch (item.code) {
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
        this.dialogServ.toast(`点击: ${item.code}`);
    }
  }
}
