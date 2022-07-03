import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { WeatherComponent } from './pages/weather/weather.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'search', loadChildren: () => import('./pages/search/search.module').then(m => m.SearchModule) },
  { path: 'map', loadChildren: () => import('./pages/map/map.module').then(m => m.MapModule) },
  { path: 'geolocation', loadChildren: () => import('./pages/geolocation/geolocation.module').then(m => m.GeolocationModule) },
  //{ path: ':query', component: WeatherComponent},
  { path: ':query', loadChildren: () => import('./pages/weather/weather.module').then(m => m.WeatherModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
