
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import {
  IonApp,
  IonContent,
  IonIcon,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonNote,
  IonRouterOutlet,
  IonSplitPane,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {
  appsOutline,
  appsSharp,
  chatboxOutline,
  chatboxSharp,
  codeWorkingOutline,
  codeWorkingSharp,
  ellipsisHorizontalOutline,
  ellipsisHorizontalSharp,
  fingerPrintOutline,
  fingerPrintSharp,
  globeOutline,
  globeSharp,
  swapHorizontalOutline,
  swapHorizontalSharp,
} from 'ionicons/icons';

@Component({
  selector: 'car-root',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    IonApp,
    IonSplitPane,
    IonMenu,
    IonContent,
    IonList,
    IonListHeader,
    IonNote,
    IonMenuToggle,
    IonIcon,
    IonLabel,
    IonRouterOutlet
],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  pages = [
    { title: '管道', url: 'pipes', icon: 'swap-horizontal' },
    { title: '对话框', url: 'dialog', icon: 'chatbox' },
    { title: '弹出菜单', url: 'popover', icon: 'ellipsis-horizontal' },
    { title: '指纹', url: 'fp', icon: 'finger-print' },
    { title: '网络', url: 'http', icon: 'globe' },
    { title: '翻页', url: 'pagination', icon: 'code-working' },
    { title: '表格', url: 'table', icon: 'apps' },
  ];
  constructor() {
    addIcons({
      swapHorizontalOutline,
      swapHorizontalSharp,
      chatboxOutline,
      chatboxSharp,
      ellipsisHorizontalOutline,
      ellipsisHorizontalSharp,
      fingerPrintOutline,
      fingerPrintSharp,
      globeOutline,
      globeSharp,
      codeWorkingOutline,
      codeWorkingSharp,
      appsOutline,
      appsSharp,
    });
  }
}
