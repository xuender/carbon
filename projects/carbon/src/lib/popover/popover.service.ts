import { Injectable } from '@angular/core';
import { PopoverController } from '@ionic/angular/standalone';

import { PopoverItem, PopoverOptions } from './popover-options';
import { PopoverComponent } from './popover.component';

@Injectable({
  providedIn: 'root',
})
export class PopoverService {
  constructor(private popoverCtrl: PopoverController) {}

  async open<T>(event: Event, options: PopoverOptions) {
    const popover = await this.popoverCtrl.create({
      component: PopoverComponent,
      translucent: true,
      event,
      componentProps: {
        options,
      },
    });

    popover.present();

    const { data } = await popover.onDidDismiss<PopoverItem>();

    return data;
  }

  async run<T>(target: any, item: T, event: Event, options: PopoverOptions) {
    event.stopPropagation();

    const data = await this.open(event, options);
    if (!data) {
      return;
    }

    if (!target[data.code]) {
      return;
    }

    if (target[data.code].length > 1) {
      target[data.code](item, data.data);
    } else {
      target[data.code](item);
    }
  }
}
