import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ForecastDayComponent } from './forecast-day/forecast-day.component';
import { LoaderComponent } from './shared/loader/loader.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ForecastComponent } from './forecast/forecast.component';
import { ForecastAstroComponent } from './forecast-astro/forecast-astro.component';
import { ForecastHourComponent } from './forecast-hour/forecast-hour.component';
import { CurrentComponent } from './current/current.component';
import { SettingsComponent } from './settings/settings.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ForecastDayComponent,
    LoaderComponent,
    HeaderComponent,
    FooterComponent,
    ForecastComponent,
    ForecastAstroComponent,
    ForecastHourComponent,
    CurrentComponent,
    SettingsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule
  ],
  exports: [
    ForecastComponent,
    ForecastDayComponent,
    ForecastAstroComponent,
    ForecastHourComponent,
    LoaderComponent,
    HeaderComponent,
    FooterComponent,
    CurrentComponent,
    SettingsComponent
  ]
})
export class ComponentsModule { }
