import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { CarbonModule, DialogService } from 'projects/carbon/src/public-api';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, CarbonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  num = 1694653053910;
  constructor(private dis: DialogService) {}

  alert(msg: string) {
    this.dis.alert(msg);
  }
}
