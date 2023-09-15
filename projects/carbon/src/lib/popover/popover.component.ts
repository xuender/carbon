import { Component } from '@angular/core';
import { NavParams, PopoverController } from '@ionic/angular';

import { PopoverItem, PopoverOptions } from './popover-options';

@Component({
  selector: 'car-popover',
  templateUrl: './popover.component.html',
})
export class PopoverComponent {
  options: PopoverOptions;
  parent: PopoverItem[] = [];
  constructor(
    private navParams: NavParams,
    private popoverCtrl: PopoverController
  ) {
    this.options = this.navParams.data['options'];

    for (const item of this.options.items) {
      if (item.children && item.children.length) {
        this.parent.push(item);
      }
    }
  }

  close(item: PopoverItem) {
    if (item.children && item.children.length) {
      return;
    }

    this.popoverCtrl.dismiss(item.code);
  }
}
