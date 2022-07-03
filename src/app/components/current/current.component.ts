import { Component, Input } from '@angular/core';
import { Settings } from 'src/app/interfaces/settings';
import { Current, Location } from '../../interfaces/weather-response';

@Component({
  selector: 'db-current',
  templateUrl: './current.component.html'
})

export class CurrentComponent {

  @Input() current!: Current;
  @Input() location!: Location;
  @Input() settings!: Settings;

}
