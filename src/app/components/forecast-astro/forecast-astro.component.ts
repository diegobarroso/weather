import { Component, Input } from '@angular/core';
import { Astro } from 'src/app/interfaces/weather-response';

@Component({
  selector: 'db-forecast-astro',
  templateUrl: './forecast-astro.component.html',
  styleUrls: ['./forecast-astro.component.scss']
})
export class ForecastAstroComponent {

  @Input() astro!: Astro;

}
