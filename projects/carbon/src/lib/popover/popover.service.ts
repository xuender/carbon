import { Injectable } from '@angular/core';
import { PopoverController } from '@ionic/angular/standalone';

import { PopoverOptions } from './popover-options';
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

    const { data } = await popover.onDidDismiss();

    return data;
  }

  async run<T>(target: any, item: T, event: Event, options: PopoverOptions) {
    const data = await this.open(event, options);
    if (!data) {
      return;
    }

    if (!target[data]) {
      return;
    }

    target[data](item);
  }
}
