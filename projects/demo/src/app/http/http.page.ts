
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import {
  IonContent,
  IonHeader,
  IonItem,
  IonList,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';
import { DialogService } from 'carbon';

import { CarbonModule } from 'projects/carbon/src/public-api';

@Component({
  selector: 'car-http-page',
  templateUrl: './http.page.html',
  standalone: true,
  imports: [
    CarbonModule,
    HttpClientModule,
    IonHeader,
    IonTitle,
    IonContent,
    IonList,
    IonToolbar,
    IonItem
],
})
export class HttpPage {
  constructor(private http: HttpClient, private dialogServ: DialogService) {}

  slow() {
    this.http
      .get('https://www.yahoo.com', { responseType: 'arraybuffer' })
      .subscribe(() => this.dialogServ.alert('完毕'));
  }

  fast() {
    this.http
      .get('/', { responseType: 'arraybuffer' })
      .subscribe(() => this.dialogServ.alert('完毕'));
  }
}
