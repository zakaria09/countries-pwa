import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Country } from '../types/country.types';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  constructor(private http: HttpClient) {}

  getAllCountries = () =>
    this.http.get<Country[]>('https://restcountries.com/v3.1/all');
}
