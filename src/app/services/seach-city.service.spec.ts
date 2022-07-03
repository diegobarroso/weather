import { TestBed } from '@angular/core/testing';

import { SeachCityService } from './seach-city.service';

describe('SeachCityService', () => {
  let service: SeachCityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SeachCityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
