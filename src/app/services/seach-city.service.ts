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
        'X-RapidAPI-Key': environment['X-RapidAPI-Key'],
        'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
      }
    };
    const url = 'https://weatherapi-com.p.rapidapi.com/search.json';
    return this.http.get<City[]>(url, options);
  }

}
