import { Inject, Injectable } from '@angular/core';
import {
  AlertController,
  AlertOptions,
  ToastController,
} from '@ionic/angular/standalone';

import { Config } from './config';

type TextFieldTypes =
  | 'date'
  | 'email'
  | 'number'
  | 'password'
  | 'search'
  | 'tel'
  | 'text'
  | 'url'
  | 'time'
  | 'week'
  | 'month'
  | 'datetime-local'
  | 'checkbox'
  | 'radio'
  | 'textarea';

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
    private toastCtrl: ToastController,
  ) {
    if (config && config.dialog) {
      Object.assign(this.cfg, config.dialog);
    }
  }

  async toast(message: string) {
    const toast = await this.toastCtrl.create({
      message,
      duration: 1400,
      position: 'bottom',
      mode: 'ios',
      color: 'dark',
    });

    await toast.present();
  }

  alert(message: string, header = this.cfg.header) {
    console.log(`alert: ${message}`);

    return this.show({
      message,
      header,
      buttons: [
        {
          text: this.cfg.ok,
          role: this.cfg.cancel,
          htmlAttributes: { 'aria-label': 'close' },
        },
      ],
    });
  }

  confirm(message: string, header = this.cfg.header) {
    console.log(`confirm: ${message}`);

    return this.show({
      message,
      header,
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

  danger(message: string, header = this.cfg.warn) {
    console.log(`danger: ${message}`);

    return this.show({
      message,
      header,
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
    placeholder = this.cfg.placeholder,
    header = this.cfg.header,
    type: TextFieldTypes = 'text',
  ) {
    return this.show({
      message,
      header,
      inputs: [
        {
          label: '',
          name: 'input',
          value: defaultValue,
          type,
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

  password(
    message: string,
    defaultValue = '',
    placeholder = this.cfg.placeholder,
    header = this.cfg.header,
  ) {
    return this.prompt(message, defaultValue, placeholder, header, 'password');
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
