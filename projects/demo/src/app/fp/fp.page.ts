
import { Component, OnInit } from '@angular/core';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';

import {
  Browser,
  CarbonModule,
  Fingerprint,
  cid,
} from 'projects/carbon/src/public-api';

@Component({
  selector: 'car-fp-page',
  templateUrl: './fp.page.html',
  standalone: true,
  imports: [
    CarbonModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent
],
})
export class FpPage implements OnInit {
  fp?: number;
  cid?: string;
  browser?: string;
  constructor() {}

  ngOnInit(): void {
    this.fp = Fingerprint();
    this.cid = cid();
    this.browser = Browser();
  }
}
