import { Component, Input } from '@angular/core';
import { Astro } from 'src/app/interfaces/weather-response';

@Component({
  selector: 'db-forecast-astro',
  templateUrl: './forecast-astro.component.html'
})
export class ForecastAstroComponent {

  @Input() astro!: Astro;

}
