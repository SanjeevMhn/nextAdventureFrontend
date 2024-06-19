import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';


export type Locations = {
  id: number,
  name: string,
  img?: string,
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

  getLocations(): Observable<Array<Locations>> {
    let trendingLocations:Array<Locations> = [
      {
        id: 1,
        name: 'Pokhara',
        img: 'images/pokhara.jpg'
      },
      {
        id: 2,
        name: 'Annapurna',
        img: 'images/annapurna.jpg'
      },
      {
        id: 3,
        name: 'Ghandruk',
        img: 'images/ghandruk.jpg'
      },
      {
        id: 4,
        name: 'Lumbini',
        img: 'images/lumbini.jpg'
      },
      {
        id: 5,
        name: 'Mardi',
        img: 'images/mardi.jpg'
      }
    ];

    return of(trendingLocations)
  }

  getTrendingLocations():Observable<Array<Locations>>{
    let trendingLocations:Array<Locations> = [
      {
        id: 1,
        name: 'Pokhara',
        img: 'images/pokhara.jpg'
      },
      {
        id: 2,
        name: 'Annapurna',
        img: 'images/annapurna.jpg'
      },
      {
        id: 3,
        name: 'Ghandruk',
        img: 'images/ghandruk.jpg'
      },
      {
        id: 4,
        name: 'Lumbini',
        img: 'images/lumbini.jpg'
      },
      {
        id: 5,
        name: 'Mardi',
        img: 'images/mardi.jpg'
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

  getBlogs(): Observable<Array<Locations>>{
    let blogs = [
      {
        id: 1,
        name: 'Top hiking locations',
        img: 'images/pokhara.jpg'
      },
      {
        id: 2,
        name: 'Bungee destinations',
        img: 'images/mardi.jpg'
      },
      {
        id: 3,
        name: 'Top events in Kathmandu',
        img: 'images/ghandruk.jpg'
      },
      {
        id: 4,
        name: 'Cable car in Pokhara',
        img: 'images/lumbini.jpg'
      },
      {
        id: 5,
        name: 'Chandragiri temple visit',
        img: 'images/annapurna.jpg'
      }
    ];

    return of(blogs);
  }

}
