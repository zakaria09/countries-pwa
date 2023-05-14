import { createSelector } from "@ngrx/store";
import { CountriesState } from "./country.reducer";



export const countriesState = (state: CountriesState) => state;

export const selectCountries = createSelector(
  countriesState,
  (countries: CountriesState) => {
    return countries;
  }
);