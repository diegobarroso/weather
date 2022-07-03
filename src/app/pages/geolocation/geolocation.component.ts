import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LocationService } from '../../services/location.service';

import { Toast } from 'materialize-css';

@Component({
  selector: 'db-geolocation',
  templateUrl: './geolocation.component.html',
  styleUrls: ['./geolocation.component.scss']
})
export class GeolocationComponent {

  showLoader: boolean = false;

  constructor(private locationService: LocationService,
              private router: Router) { }

  getCurrentLocation() {
    this.showLoader = true;
    this.locationService.getUserLocation()
      .then(coords => {
        this.showLoader = false;
        const query = coords.join(',');
        this.router.navigate(['/', query]);
      })
      .catch(error => {
        new Toast({ html: 'Could not get your location' });
        this.router.navigate(['/']);
      });
  }

}
