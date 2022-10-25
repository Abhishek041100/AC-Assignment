/*** All code has been written and compiled solely under individual input
 * and has been created with the help of the learning resources provided. ***/ 

import { AppStateInterface } from "../types/appState.interface";
import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CoffeeInterface } from "../types/coffee.interface";

export const selectFeature =  (state: AppStateInterface) => state.coffee

//export const COFFEE_STATE_NAME = 'coffee';
//const getCoffeeState = createFeatureSelector(COFFEE_STATE_NAME);

export const isLoadingSelector = createSelector(
    selectFeature,
    (coffee: Array<CoffeeInterface>) => coffee
);
//export const getPosts = createSelector(getCoffeeState, );
