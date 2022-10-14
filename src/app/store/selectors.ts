/*** All code has been written and compiled solely under individual input
 * and has been created with the help of the learning resources provided. ***/ 

import { AppStateInterface } from "../types/appState.interface";
import { createSelector } from "@ngrx/store";
import { CoffeeInterface } from "../types/coffee.interface";

export const selectFeature =  (state: AppStateInterface) => state.coffees

export const isLoadingSelector = createSelector(
    selectFeature,
    (coffee: Array<CoffeeInterface>) => coffee
);