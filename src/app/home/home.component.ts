import { Component, inject, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators, ValueChangeEvent } from '@angular/forms';
import { Observable, combineLatest, filter, from, map, of } from 'rxjs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInput, MatInputModule } from '@angular/material/input';
import { AsyncPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Destination, HomeService, Locations } from './home.service';
import { NgClass } from '@angular/common';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { NgOptimizedImage } from '@angular/common';
import { BottomNavComponent } from '../bottom-nav/bottom-nav.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatAutocompleteModule,
    MatInputModule,
    AsyncPipe,
    FormsModule,
    NgClass,
    NavbarComponent,
    FooterComponent,
    NgOptimizedImage,
    BottomNavComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {

  @ViewChild('adventureForm', { static: true }) adventureForm!: NgForm;

  homeService = inject(HomeService);

  popularLocation$: Observable<Array<Locations>> = this.homeService.getLocations();
  trendingLocations$: Observable<Array<Locations>> = this.homeService.getTrendingLocations();
  activities$: Observable<Array<string>> = this.homeService.getActivityList();
  blogs$: Observable<Array<Locations>> = this.homeService.getBlogs();

  destinations$: Observable<Array<Destination>> = this.homeService.getDestinations();

  location: string = '';
  heroImg: string = '/images/hero.jpg';

  vm$ = combineLatest([
          this.popularLocation$, 
          this.trendingLocations$, 
          this.activities$, 
          this.blogs$]).pipe(map(([popular,trending,activities,blogs]) => ({popular, trending, activities, blogs})));

  constructor() { }

  ngOnInit(): void {
  }

  valueChange(event: any): void {
    let search = event.target.value.toLowerCase();
    this.popularLocation$ = this.homeService.getLocations().pipe(
      map(items => items.filter(item => item.name.toLowerCase().includes(search.toLowerCase())))
    );
  }

  onSubmit(): void {

  }
}
