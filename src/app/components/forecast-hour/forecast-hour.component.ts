import { ChangeDetectionStrategy, Component, Input, AfterViewInit } from '@angular/core';
import { Carousel } from 'materialize-css';
import { Settings } from 'src/app/interfaces/settings';
import { Hour } from 'src/app/interfaces/weather-response';

@Component({
  selector: 'db-forecast-hour',
  templateUrl: './forecast-hour.component.html',
  styleUrls: ['./forecast-hour.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ForecastHourComponent implements AfterViewInit {

  @Input() hours!: Hour[];
  @Input() settings!: Settings;
  @Input() index!: number;
  @Input() maxTemp!: number;

  fromHour: number = 0; 
  
  constructor() { }

  ngAfterViewInit(): void {
    if (this.index === 0) {
      this.fromHour = new Date().getHours()+1;
    }
    setTimeout(() => {
      let elems = document.querySelectorAll('.carousel');
      let instances = Carousel.init(elems, {
        numVisible: 24,
        shift: 0,
        dist: 0
    });
    
    instances[0].set(this.fromHour)
    
    }, 200);    
  }


  getPadding(temp: number): string {
    let padding = (this.maxTemp - temp) * 5;
    return `${padding}px`;
  }

}
