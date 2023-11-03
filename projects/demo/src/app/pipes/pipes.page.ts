import { Component } from '@angular/core';
import {
  IonAccordion,
  IonAccordionGroup,
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';

import { CarbonModule } from 'projects/carbon/src/public-api';

@Component({
  selector: 'car-pipes-page',
  templateUrl: './pipes.page.html',
  standalone: true,
  imports: [
    CarbonModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonAccordion,
    IonAccordionGroup,
    IonItem,
    IonLabel,
  ],
})
export class PipesPage {
  now = Date.now();
}
