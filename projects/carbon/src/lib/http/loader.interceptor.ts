import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';

import { Config } from '../config';
import { sleep } from '../time';

@Injectable()
export class LoaderInterceptor implements HttpInterceptor {
  private count = 0;
  private wait = false;
  private message = '网络请求中，请稍后...';
  private duration = 300;
  constructor(
    @Inject('carbonCfg') config: Config,
    private loadingCtrl: LoadingController
  ) {
    if (config && config.http) {
      if (config.http.duration) {
        this.duration = config.http.duration;
      }

      if (config.http.waitMessage) {
        this.message = config.http.waitMessage;
      }
    }
  }

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    this.count++;
    this.open();

    return next.handle(request).pipe(finalize(() => this.count--));
  }

  private async open() {
    if (this.wait) {
      return;
    }

    this.wait = true;
    await sleep(this.duration);

    if (this.count < 1) {
      this.wait = false;

      return;
    }

    const load = await this.loadingCtrl.create({
      message: this.message,
    });
    await load.present();

    while (this.count) {
      await sleep(this.duration);
    }

    await load.dismiss();
    this.wait = false;
  }
}
