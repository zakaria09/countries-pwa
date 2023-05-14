import { NgModule } from "@angular/core";
import { StoreModule } from '@ngrx/store';
import { countriesReducer } from "./country.reducer";
import { EffectsModule } from '@ngrx/effects';
import { CountryEffects } from "./country.effect";


@NgModule({
  imports: [
    StoreModule.forFeature('countryFeature', {
      state: countriesReducer,
    }),
    EffectsModule.forFeature([CountryEffects]),
  ],
})
export class CountryNgrxModule {}