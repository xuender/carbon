import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CarbonModule } from '../../../../carbon/src/public-api';

@Component({
  selector: 'car-pipes-page',
  templateUrl: './pipes.page.html',
  standalone: true,
  imports: [CommonModule, CarbonModule, IonicModule],
})
export class PipesPage {}
