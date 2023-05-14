import { createAction, createActionGroup, emptyProps, props } from '@ngrx/store';
import { Country } from '../types/country.types';

export const countryActions = createActionGroup({
  source: 'Countries API',
  events: {
    'loading countries': emptyProps(),
    'success load all countries': props<{ countries: Country[] }>()
  }
});