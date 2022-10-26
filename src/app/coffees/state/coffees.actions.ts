import { Coffee } from '../../models/coffee.model';
import { createAction, props } from '@ngrx/store';

export const LOAD_COFFEES = '[coffees page] load coffees';
export const LOAD_COFFEES_SUCCESS = '[coffees page] load coffees success';

export const loadCoffees = createAction(LOAD_COFFEES);
export const loadCoffeesSuccess = createAction(
  LOAD_COFFEES_SUCCESS,
  props<{ coffees: Coffee[] }>()
);
