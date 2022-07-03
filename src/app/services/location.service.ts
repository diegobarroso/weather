import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  userLocation?: [number, number];

  constructor() {
    this.getUserLocation();
   }

  getUserLocation(): Promise<[number, number]> {
    return new Promise((resolve, reject) => {
      const timeout = setTimeout(() => reject('Timeout'), 5000);

      navigator.geolocation.getCurrentPosition(
        ({coords}) => {
          clearTimeout(timeout);
          this.userLocation = [coords.latitude, coords.longitude];
          resolve(this.userLocation);          
        },
        (error) => {
          reject(error);
        }
      );
    });
  }
}
