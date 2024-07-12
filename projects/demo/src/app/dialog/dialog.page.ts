import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  IonButton,
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';

import { CarbonModule, DialogService } from 'projects/carbon/src/public-api';

@Component({
  selector: 'car-dialog-page',
  templateUrl: './dialog.page.html',
  standalone: true,
  imports: [
    CommonModule,
    CarbonModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonButton,
  ],
})
export class DialogPage {
  constructor(private dis: DialogService) {}

  alert() {
    this.dis.alert('提示信息');
  }

  async confirm() {
    const ret = await this.dis.confirm('是否xxx吗?');
    this.dis.toast(`选择: ${ret}`);
  }

  async danger() {
    const ret = await this.dis.confirm('确认删除吗?');
    this.dis.toast(`选择: ${ret}`);
  }

  async prompt() {
    const ret = await this.dis.prompt('请输入:');
    this.dis.toast(`输入: ${ret}`);
  }

  async password() {
    const ret = await this.dis.password('请输入:');
    this.dis.toast(`输入: ${ret}`);
  }

  toast() {
    this.dis.toast(`提示`);
  }

  async select() {
    const ret = await this.dis.select('请选择', 2, [
      { label: '选项1', key: 1 },
      { label: '选项2', key: 2 },
    ]);
    this.dis.toast(`选择: ${ret}`);
  }
}
