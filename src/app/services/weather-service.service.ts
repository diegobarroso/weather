import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { WeatherResponse } from '../interfaces/weather-response';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WeatherServiceService {

  constructor(private http: HttpClient) { }

  getWeather(query: string): Observable<WeatherResponse> {

    const options = {
      method: 'GET',
      params: {q: query, days: '3'},
      headers: {
        'key': environment['API-Key']
      }
    };

    const url =  ' https://api.weatherapi.com/v1/forecast.json';

    return this.http.get<WeatherResponse>(url, options);
  }


}
