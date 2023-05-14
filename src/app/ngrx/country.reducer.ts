import { createReducer, on } from '@ngrx/store';
import { Country } from '../types/country.types';
import { countryActions } from './country.action';

export interface CountriesState {
  isLoading: boolean;
  error: null | any;
  countries: Country[];
};

export const initialState: CountriesState = {
  isLoading: false,
  error: null,
  countries: [],
};

export const countriesReducer = createReducer(
  initialState,
  on(countryActions.loadingCountries, (state) => ({
    ...state,
    isLoading: true,
  })),
  on(countryActions.successLoadAllCountries, (state, { countries }) => ({ ...state, isLoading: false, countries }))
);