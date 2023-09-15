import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';

import { CarbonModule, DialogService } from '../../../../carbon/src/public-api';

@Component({
  selector: 'car-dialog-page',
  templateUrl: './dialog.page.html',
  standalone: true,
  imports: [CommonModule, CarbonModule, IonicModule],
})
export class DialogPage {
  constructor(private dis: DialogService) {}

  alert() {
    this.dis.alert('提示信息');
  }

  async confirm() {
    const ret = await this.dis.confirm('是否xxx吗?');
    this.dis.alert(`${ret}`);
  }

  async danger() {
    const ret = await this.dis.confirm('确认删除吗?');
    this.dis.alert(`${ret}`);
  }
}
