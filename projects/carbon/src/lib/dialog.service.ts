import { Injectable } from '@angular/core';
import { AlertController, AlertOptions, ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root',
})
export class DialogService {
  constructor(
    private alertCtrl: AlertController,
    private toastCtrl: ToastController
  ) {}

  async toast(message: string) {
    const toast = await this.toastCtrl.create({
      message,
      duration: 1500,
      position: 'top',
    });

    await toast.present();
  }

  alert(message: string) {
    console.log(`alert: ${message}`);

    return this.show({
      message,
      header: '系统提示',
      buttons: [
        {
          text: '确定',
          role: 'cancel',
          htmlAttributes: { 'aria-label': 'close' },
        },
      ],
    });
  }

  confirm(message: string) {
    console.log(`confirm: ${message}`);

    return this.show({
      message,
      header: '系统询问',
      buttons: [
        {
          text: '确定',
          role: 'ok',
          htmlAttributes: { 'aria-label': 'ok' },
        },
        {
          text: '取消',
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
      header: '系统警告',
      buttons: [
        {
          text: '确定',
          role: 'destructive',
          htmlAttributes: { 'aria-label': 'delete' },
        },
        {
          text: '取消',
          role: 'cancel',
          htmlAttributes: { 'aria-label': 'close' },
        },
      ],
    });
  }

  private async show(options: AlertOptions) {
    const alert = await this.alertCtrl.create(options);

    alert.present();

    const { role } = await alert.onDidDismiss();

    return role && role !== 'backdrop' && role !== 'cancel';
  }
}
