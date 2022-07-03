import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import * as  mapboxgl from 'mapbox-gl'; 
import { environment } from 'src/environments/environment';

@Component({
  selector: 'db-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements AfterViewInit {
  
  @ViewChild('mapDiv') mapDiv!: ElementRef;
  
  constructor(private router: Router) { }
  
  ngAfterViewInit(): void {
    (mapboxgl as any).accessToken = environment['mapBox-accessToken'];
    let map = new mapboxgl.Map({
      container: this.mapDiv.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v11', // style URL
      center: [-3.70256, 40.4165], // starting position [lng, lat]
      zoom: 4 // starting zoom
    });

    map.on('click', (e) => {
      const position: string = `${e.lngLat.lat},${e.lngLat.lng}`;
      this.router.navigate(['/', position]);
      });
  }

}
