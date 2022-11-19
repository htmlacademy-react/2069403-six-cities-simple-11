import { createReducer } from '@reduxjs/toolkit';
import { sortValues } from '../utils/utils';
import { Cities } from '../const';
import { City, Offers } from '../types/types';
import { setSortName, setOffers, switchCity } from './action';

type ReducerTypes = {
  currentCity: City;
  offersList: Offers;
  currentSorting: string;
};

const initialState: ReducerTypes = {
  currentCity: Cities[0],
  offersList: [],
  currentSorting: sortValues[0],
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(switchCity, (state, action) => {
      state.currentCity = action.payload;
    })
    .addCase(setOffers, (state, action) => {
      state.offersList = action.payload;
    })
    .addCase(setSortName, (state, action) => {
      state.currentSorting = action.payload;
    });
});

export { reducer };
