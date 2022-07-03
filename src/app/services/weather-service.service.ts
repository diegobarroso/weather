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
        'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com',
        'X-RapidAPI-Key': environment['X-RapidAPI-Key']
      }
    };
  
    const url =  'https://weatherapi-com.p.rapidapi.com/forecast.json';

    return this.http.get<WeatherResponse>(url, options);
  }


}
