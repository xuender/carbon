import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'car-root',
  standalone: true,
  imports: [CommonModule, IonicModule, RouterLink, RouterLinkActive],
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
  ];
  constructor() {}
}
