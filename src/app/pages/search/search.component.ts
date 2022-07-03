import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { map, debounceTime, distinctUntilChanged, filter, tap } from 'rxjs';
import { City } from 'src/app/interfaces/city';
import { SeachCityService } from '../../services/seach-city.service';

@Component({
  selector: 'db-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {

  cities: City[] = [];

  searched: boolean = false;

  inputSearch = new FormControl('');

  constructor(private seachCityService: SeachCityService,
              private router: Router) { }

  ngOnInit(): void {
    this.onChange();
  }

  onChange() {
    this.inputSearch.valueChanges
      .pipe(
        map((search: string) => search.trim()),
        debounceTime(500),
        distinctUntilChanged(),
        filter((search: string) => search !== ''),
        tap((search: string) => this.search(search))
      )
      .subscribe();
  }

  search(query: string) {
    this.seachCityService.getCities(query)
      .subscribe(cities => {
        this.searched = false;
        this.cities = cities;
        this.searched = true;
      });
  }

  onGoToCity (city: City) {
    this.router.navigate(['/', city.url]);
  }

}
