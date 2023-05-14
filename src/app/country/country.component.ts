import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { CountriesState } from '../ngrx/country.reducer';
import { countryActions } from '../ngrx/country.action';
import { selectCountries } from '../ngrx/country.selector';
import { map, Observable } from 'rxjs';

@Component({
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss'],
})
export class CountryComponent {
  countries$: Observable<CountriesState> = this.store
    .select(selectCountries)
    .pipe(map((s: any) => s.countryFeature.state));

  constructor(private store: Store<CountriesState>) {}

  ngOnInit() {
    this.store.dispatch(countryActions.loadingCountries());
    this.countries$.subscribe((res) => console.log(res));
  }
}
