import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators, ValueChangeEvent } from '@angular/forms';
import { Observable, filter, from, map, of } from 'rxjs';
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
    NgOptimizedImage
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {

  @ViewChild('adventureForm', { static: true }) adventureForm!: NgForm;

  popularLocation$!: Observable<Array<Locations>>;
  trendingLocations$!: Observable<Array<Locations>>;
  activities$!: Observable<Array<string>>;
  blogs$!: Observable<Array<Locations>>;

  location: string = '';
  heroImg: string = 'images/hero.jpg';

  constructor(private homeService: HomeService) { }

  ngOnInit(): void {
    this.popularLocation$ = this.homeService.getLocations().pipe(map(locations => locations));
    this.trendingLocations$ = this.homeService.getTrendingLocations().pipe(map(locations => locations));
    this.activities$ = this.homeService.getActivityList().pipe(map(activities => activities));
    this.blogs$ = this.homeService.getBlogs().pipe(map(blogs => blogs));
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
