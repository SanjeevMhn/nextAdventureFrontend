import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable, from, map, of } from 'rxjs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInput, MatInputModule } from '@angular/material/input';
import { AsyncPipe } from '@angular/common';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatFormFieldModule, MatAutocompleteModule, MatInputModule, AsyncPipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {

  
  adventureForm!: FormGroup
  popularLocation:string[] = [
    'Pokhara',
    'Annapurna',
    'Ghandruk',
    'Lumbini',
  ]

  popularLocation$:Observable<string[]> = of(this.popularLocation).pipe(map(value => value));

  constructor(private fb: FormBuilder){}

  ngOnInit(): void {
    this.createAdventureForm();

  }

  createAdventureForm():void{
    this.adventureForm = this.fb.group({
      "location": ['',Validators.required],
      "checkinDate": ['',Validators.required,],
      "checkoutDate": ['',Validators.required],
      "guests": ['',Validators.required]
    })
  }

  onSubmit():void{

  }
}
