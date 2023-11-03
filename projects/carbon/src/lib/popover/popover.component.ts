import { Component } from '@angular/core';
import {
  IonBadge,
  IonCheckbox,
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonPopover,
  NavParams,
  PopoverController,
} from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';

import { PopoverItem, PopoverOptions } from './popover-options';

@Component({
  selector: 'car-popover',
  templateUrl: './popover.component.html',
  standalone: true,
  imports: [
    IonContent,
    IonList,
    IonListHeader,
    IonItem,
    IonIcon,
    IonLabel,
    IonBadge,
    IonCheckbox,
    IonPopover,
    CommonModule,
  ],
})
export class PopoverComponent {
  options: PopoverOptions;
  parent: PopoverItem[] = [];
  constructor(
    private navParams: NavParams,
    private popoverCtrl: PopoverController
  ) {
    this.options = this.navParams.data['options'];

    if (!this.options.items) {
      this.options.items = [];
    }

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
