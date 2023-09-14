import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'car-tabs',
  standalone: true,
  imports: [CommonModule, IonicModule],
  templateUrl: './tabs.component.html',
})
export class TabsComponent {}
