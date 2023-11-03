import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonFooter,
  IonHeader,
  IonItem,
  IonList,
  IonMenuButton,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';

import { CarbonModule, TableResult } from 'projects/carbon/src/public-api';

@Component({
  selector: 'car-table-page',
  templateUrl: './pagination.page.html',
  standalone: true,
  imports: [
    CarbonModule,
    CommonModule,
    IonHeader,
    IonToolbar,
    IonButtons,
    IonMenuButton,
    IonBackButton,
    IonTitle,
    IonContent,
    IonList,
    IonItem,
    IonFooter,
  ],
})
export class PaginationPage {
  res: TableResult = {
    limit: 10,
    count: 100,
    offset: 0,
    data: [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}],
  };
  constructor(route: ActivatedRoute) {
    route.params.subscribe((params) => {
      console.log(params);
      let offset = params['offset'];
      if (!offset) {
        offset = '0';
      }

      this.res.offset = parseInt(offset);

      for (let i = 0; i < 10; i++) {
        (this.res.data as any[])[i].label = `条目 ${this.res.offset + i + 1}`;
      }

      console.log(this.res);
    });
  }
}
