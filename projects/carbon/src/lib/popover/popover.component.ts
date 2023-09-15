import { Component } from '@angular/core';
import { IonicModule, NavParams, PopoverController } from '@ionic/angular';

import { PopoverOptions } from './popover-options';

@Component({
  selector: 'car-popover',
  templateUrl: './popover.component.html',
})
export class PopoverComponent {
  options: PopoverOptions;
  constructor(
    private navParams: NavParams,
    private popoverCtrl: PopoverController
  ) {
    this.options = this.navParams.data['options'];
  }

  close(code: string) {
    this.popoverCtrl.dismiss(code);
  }
}
