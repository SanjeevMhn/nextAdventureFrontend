import { Component, OnInit } from '@angular/core';
import { Observable, map } from 'rxjs';
import { HomeService } from '../home/home.service';
import { AsyncPipe } from '@angular/common';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [AsyncPipe,NgClass],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent implements OnInit {

  services$!: Observable<Array<string>>;

  constructor(private homeService: HomeService){

  }

  ngOnInit(): void {
    this.services$ = this.homeService.getServices().pipe(map(services => services))
  }

}
