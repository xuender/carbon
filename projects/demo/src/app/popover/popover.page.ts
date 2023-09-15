import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CarbonModule } from '../../../../carbon/src/public-api';

@Component({
  selector: 'car-popover-page',
  templateUrl: './popover.page.html',
  standalone: true,
  imports: [CarbonModule, IonicModule],
})
export class PopoverPage {}
