import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

import { CarbonModule, Fingerprint } from 'projects/carbon/src/public-api';

@Component({
  selector: 'car-fp-page',
  templateUrl: './fp.page.html',
  standalone: true,
  imports: [CommonModule, CarbonModule, IonicModule],
})
export class FpPage implements OnInit {
  fp?: number;
  constructor() {}
  ngOnInit(): void {
    this.fp = Fingerprint();
  }
}
