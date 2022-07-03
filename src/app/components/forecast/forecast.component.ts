import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Settings } from 'src/app/interfaces/settings';

import { Forecast } from 'src/app/interfaces/weather-response';

@Component({
  selector: 'db-forecast',
  templateUrl: './forecast.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ForecastComponent {

    @Input() forecast!: Forecast;
    @Input() settings!: Settings;
    @Input() lastUpdated!: string;
  

    getTabTitle(day: Date, index: number): string {
      return index === 0 ? 'Today' :
        index === 1 ? 'Tomorrow' :
        new Date(day).toLocaleDateString('en-us', {weekday: 'long'}).toString();
    }

}
