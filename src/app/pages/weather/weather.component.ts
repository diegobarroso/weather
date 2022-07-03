import { Component, OnInit } from '@angular/core';
import { Current, Forecast, Location } from 'src/app/interfaces/weather-response';
import { WeatherServiceService } from 'src/app/services/weather-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Modal, Toast } from 'materialize-css';
import { Settings } from 'src/app/interfaces/settings';

@Component({
  selector: 'db-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit{

  location!: Location;
  current!: Current;
  forecast!: Forecast

  settings: Settings = {
    scale: 'C',
    distance: 'km',
    pressure: 'mb',
    precipitation: 'mm'
  }


  constructor(private activatedRoute: ActivatedRoute,
              private weatherService: WeatherServiceService,
              private router: Router) { }


  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      const query = params['query'];
      this.getWeather(query);
    });

  }



  getWeather(query: string) {
    this.weatherService.getWeather(query).subscribe(weather => {
      this.location = weather.location;
      this.current = weather.current;
      this.forecast = weather.forecast;
    }, error => {
      new Toast({html: 'Impossible to get the weather data'});
      this.router.navigate(['/']);
    });
  }

  onSettingsChange(e: Settings) {
    this.settings = e;
  }

  openModal() {
    let elems = document.querySelectorAll('.modal');
    let instances = Modal.init(elems, {});

    }
  

}
