import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';


export type TrendingLocations = {
  id: number,
  name: string,
}

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor() { }

  getServices(): Observable<string[]>{
    let services: Array<string> = [
      'Adventure',
      'Hire Guide',
      'Hire Porters',
      'Bike Rentals',
      'Car Rentals',
      'Stays'
    ]
    return of(services)
  }

  getLocations(): Observable<string[]> {
    let popularLocation: string[] = [
      'Pokhara',
      'Annapurna',
      'Ghandruk',
      'Lumbini',
    ];

    return of(popularLocation);
  }

  getTrendingLocations():Observable<Array<TrendingLocations>>{
    let trendingLocations:Array<TrendingLocations> = [
      {
        id: 1,
        name: 'Pokhara'
      },
      {
        id: 2,
        name: 'Annapurna'
      },
      {
        id: 3,
        name: 'Ghandruk'
      },
      {
        id: 4,
        name: 'Lumbini'
      },
      {
        id: 5,
        name: 'Mardi'
      }
    ];

    return of(trendingLocations);
  }

  getActivityList(): Observable<Array<string>>{
    let activities: Array<string> = [
      'trekking',
      'hiking',
      'cycling',
      'mountaineering',
      'city',
      'cultural',
      'nature',
    ]

    return of(activities);
  }

  getBlogs(): Observable<Array<TrendingLocations>>{
    let blogs = [
      {
        id: 1,
        name: 'Top hiking locations'
      },
      {
        id: 2,
        name: 'Bungee destinations'
      },
      {
        id: 3,
        name: 'Top events in Kathmandu'
      },
      {
        id: 4,
        name: 'Cable car in Pokhara'
      },
      {
        id: 5,
        name: 'Chandragiri temple visit'
      }
    ];

    return of(blogs);
  }

}
