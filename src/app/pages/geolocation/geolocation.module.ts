import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GeolocationRoutingModule } from './geolocation-routing.module';
import { GeolocationComponent } from './geolocation.component';
import { ComponentsModule } from '../../components/components.module';



@NgModule({
  declarations: [
    GeolocationComponent
  ],
  imports: [
    CommonModule,
    GeolocationRoutingModule,
    ComponentsModule
  ]
})
export class GeolocationModule { }
