import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WeatherComponent } from './weather.component';
import { WeatherRoutingModule } from './weather-routing.module';
import { ComponentsModule } from '../../components/components.module';



@NgModule({
  declarations: [
    WeatherComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    WeatherRoutingModule
  ]
})
export class WeatherModule { }
