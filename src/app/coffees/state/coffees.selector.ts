import { CoffeesState } from './coffees.state';
import { createFeatureSelector, createSelector } from '@ngrx/store';
export const COFFEE_STATE_NAME = 'coffees';
const getCoffeesState = createFeatureSelector<CoffeesState>(COFFEE_STATE_NAME);

export const getCoffees = createSelector(getCoffeesState, (state) => {
  return state.coffees;
});

export const getCoffeeById = createSelector(getCoffeesState, (state, props) => {
  return state.coffees.find((coffee) => coffee.id === props.id);
});
