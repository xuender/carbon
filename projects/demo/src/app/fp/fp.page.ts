import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

import {
  CarbonModule,
  Fingerprint,
  Browser,
  cid,
} from 'projects/carbon/src/public-api';

@Component({
  selector: 'car-fp-page',
  templateUrl: './fp.page.html',
  standalone: true,
  imports: [CommonModule, CarbonModule, IonicModule],
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
