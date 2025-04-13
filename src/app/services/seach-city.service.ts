import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { City } from '../interfaces/city';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class SeachCityService {

  constructor(private http: HttpClient) { }


  getCities(query: string): Observable<City[]> {
    const options = {
      method: 'GET',
      params: {q: query},
      headers: {
        'key': environment['API-Key'],
      }
    };
    const url = 'https://api.weatherapi.com/v1/search.json';
    return this.http.get<City[]>(url, options);
  }

}
