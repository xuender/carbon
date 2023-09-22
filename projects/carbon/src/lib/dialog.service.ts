import { Inject, Injectable } from '@angular/core';
import { AlertController, AlertOptions, ToastController } from '@ionic/angular';

import { Config } from './config';

@Injectable({
  providedIn: 'root',
})
export class DialogService {
  private cfg = {
    header: '系统提示',
    warn: '系统警告',
    ok: '确定',
    cancel: '取消',
    placeholder: '回车确定输入',
  };
  constructor(
    @Inject('carbonCfg') config: Config,
    private alertCtrl: AlertController,
    private toastCtrl: ToastController
  ) {
    if (config && config.dialog) {
      Object.assign(this.cfg, config.dialog);
    }
  }

  async toast(message: string) {
    const toast = await this.toastCtrl.create({
      message,
      duration: 1500,
      position: 'top',
      mode: 'ios',
      color: 'dark',
    });

    await toast.present();
  }

  alert(message: string) {
    console.log(`alert: ${message}`);

    return this.show({
      message,
      header: this.cfg.header,
      buttons: [
        {
          text: this.cfg.ok,
          role: this.cfg.cancel,
          htmlAttributes: { 'aria-label': 'close' },
        },
      ],
    });
  }

  confirm(message: string) {
    console.log(`confirm: ${message}`);

    return this.show({
      message,
      header: this.cfg.header,
      buttons: [
        {
          text: this.cfg.ok,
          role: 'ok',
          htmlAttributes: { 'aria-label': 'ok' },
        },
        {
          text: this.cfg.cancel,
          role: 'cancel',
          htmlAttributes: { 'aria-label': 'close' },
        },
      ],
    });
  }

  danger(message: string) {
    console.log(`danger: ${message}`);

    return this.show({
      message,
      header: this.cfg.warn,
      buttons: [
        {
          text: this.cfg.ok,
          role: 'destructive',
          htmlAttributes: { 'aria-label': 'delete' },
        },
        {
          text: this.cfg.cancel,
          role: 'cancel',
          htmlAttributes: { 'aria-label': 'close' },
        },
      ],
    });
  }

  prompt(
    message: string,
    defaultValue = '',
    placeholder = this.cfg.placeholder
  ) {
    return this.show({
      message,
      header: this.cfg.header,
      inputs: [
        {
          label: '',
          name: 'input',
          value: defaultValue,
          type: 'text',
          placeholder,
        },
      ],
      buttons: [
        {
          text: this.cfg.ok,
          role: 'ok',
          htmlAttributes: { 'aria-label': 'ok' },
        },
        {
          text: this.cfg.cancel,
          role: 'cancel',
          htmlAttributes: { 'aria-label': 'close' },
        },
      ],
    });
  }

  private async show(options: AlertOptions) {
    const alert = await this.alertCtrl.create(options);
    await alert.present();

    const input = alert.querySelector('input');
    if (input) {
      input.onkeydown = (ev: KeyboardEvent) => {
        if (ev.key === 'Enter') {
          alert.dismiss({ values: { input: input.value } }, 'ok');
        }
      };

      input.focus();
    }

    const { role, data } = await alert.onDidDismiss();
    const ret = role && role !== 'backdrop' && role !== 'cancel';

    if (input) {
      if (ret) {
        return data.values.input;
      }

      return null;
    }

    return ret;
  }
}
