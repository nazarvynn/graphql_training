import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  items!: MenuItem[];

  ngOnInit() {
    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-fw pi-home',
        routerLink: '/home',
      },
      {
        label: 'Posts',
        icon: 'pi pi-fw pi-check-square',
        routerLink: '/posts',
      },
      // {
      //   label: 'Gallery',
      //   icon: 'pi pi-fw pi-image',
      //   routerLink: '/gallery',
      // },
      {
        label: 'About',
        icon: 'pi pi-fw pi-compass',
        routerLink: '/about',
      },
    ];
  }
}
