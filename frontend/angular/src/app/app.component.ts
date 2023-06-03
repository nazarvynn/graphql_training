import { Component, OnInit } from '@angular/core';
import { MenuItem, PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  items!: MenuItem[];

  constructor(private primengConfig: PrimeNGConfig) {}

  ngOnInit() {
    this.primengConfig.ripple = true;
    this.primengConfig.zIndex = {
      modal: 1100,
      overlay: 1000,
      menu: 1000,
      tooltip: 1100,
    };

    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-fw pi-home',
        routerLink: '/home',
        automationId: 'home-page',
      },
      // {
      //   label: 'Posts',
      //   icon: 'pi pi-fw pi-check-square',
      //   routerLink: '/posts',
      //   automationId: 'posts-page',
      // },
      // {
      //   label: 'Gallery',
      //   icon: 'pi pi-fw pi-image',
      //   routerLink: '/gallery',
      //   automationId: 'gallery-page',
      // },
      {
        label: 'About',
        icon: 'pi pi-fw pi-compass',
        routerLink: '/about',
        automationId: 'about-page',
      },
    ];
  }
}
