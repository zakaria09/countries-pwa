import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, exhaustMap } from 'rxjs/operators';
import { CountryService } from '../services/country.service';
import { countryActions } from './country.action';

@Injectable()
export class CountryEffects {
  constructor(private actions$: Actions, private country: CountryService) {}

  loadMovies$ = createEffect(() =>
    this.actions$.pipe(
      ofType(countryActions.loadingCountries),
      exhaustMap(() =>
        this.country.getAllCountries().pipe(
          map((countries) => countryActions.successLoadAllCountries({ countries }))
        )
      )
    )
  );
}