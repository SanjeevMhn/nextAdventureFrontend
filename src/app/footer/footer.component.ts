import { Component } from '@angular/core';
import { HomeService, Locations } from '../home/home.service';
import { Observable, combineLatest, map } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent{

  services$:Observable<string[]> = this.homeService.getServices().pipe(map(items => items));
  locations$:Observable<Array<Locations>> = this.homeService.getLocations().pipe(map(items => items));

  vm$ = combineLatest([
        this.services$,
        this.locations$
      ]).pipe(map(([services,locations]) => ({services, locations})));

  constructor(private homeService: HomeService){}

}
