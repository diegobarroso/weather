import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Settings } from 'src/app/interfaces/settings';

import { Day } from 'src/app/interfaces/weather-response';

@Component({
  selector: 'db-forecast-day',
  templateUrl: './forecast-day.component.html',
  styleUrls: ['./forecast-day.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ForecastDayComponent {

  @Input() day!: Day;
  @Input() settings!: Settings;
  
}
