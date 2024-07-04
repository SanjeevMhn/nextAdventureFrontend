import { Component } from '@angular/core';

@Component({
  selector: 'app-bottom-nav',
  standalone: true,
  imports: [],
  templateUrl: './bottom-nav.component.html',
  styleUrl: './bottom-nav.component.scss'
})
export class BottomNavComponent {
  bottomMenus: Array<{ name: string, link: string }> = [
    {
      name: 'home',
      link: ''
    },
    {
      name: 'search',
      link: 'search'
    },
    {
      name: 'news',
      link: 'news'
    },
    {
      name: 'events',
      link: 'events'
    },
    {
      name: 'profile',
      link: 'profile'
    }
  ]

  activeMenu: string = "home";


  changeActiveMenu(name: string):void{
    this.activeMenu = name;
  }
}
