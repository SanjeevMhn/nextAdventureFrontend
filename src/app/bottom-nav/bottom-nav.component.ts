import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-bottom-nav',
  standalone: true,
  imports: [ RouterLink ],
  templateUrl: './bottom-nav.component.html',
  styleUrl: './bottom-nav.component.scss'
})
export class BottomNavComponent {
  bottomMenus: Array<{ name: string, link: string }> = [
    
    {
      name: 'news',
      link: 'news'
    },
    {
      name: 'search',
      link: 'search'
    },
    {
      name: 'home',
      link: ''
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
