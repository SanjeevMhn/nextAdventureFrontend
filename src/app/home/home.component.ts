import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators, ValueChangeEvent } from '@angular/forms';
import { Observable, combineLatest, filter, from, map, of } from 'rxjs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInput, MatInputModule } from '@angular/material/input';
import { AsyncPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HomeService, Locations } from './home.service';
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

  popularLocation$: Observable<Array<Locations>> = this.homeService.getLocations().pipe(map(locations => locations));
  trendingLocations$: Observable<Array<Locations>> = this.homeService.getTrendingLocations().pipe(map(locations => locations));
  activities$: Observable<Array<string>> = this.homeService.getActivityList().pipe(map(activities => activities));
  blogs$: Observable<Array<Locations>> = this.homeService.getBlogs().pipe(map(blogs => blogs));

  location: string = '';
  heroImg: string = '/images/hero.jpg';

  vm$ = combineLatest([
          this.popularLocation$, 
          this.trendingLocations$, 
          this.activities$, 
          this.blogs$]).pipe(map(([popular,trending,activities,blogs]) => ({popular, trending, activities, blogs})));

  constructor(private homeService: HomeService) { }

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
