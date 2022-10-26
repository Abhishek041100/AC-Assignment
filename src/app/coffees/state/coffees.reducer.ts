import {
  loadCoffeesSuccess,
} from './coffees.actions';
import { createReducer, on } from '@ngrx/store';
import { initialState } from './coffees.state';

const _coffeesReducer = createReducer(
  initialState,
  
  on(loadCoffeesSuccess, (state, action) => {
    return {
      ...state,
      coffees: action.coffees,
    };
  })
);

export function coffeesReducer(state, action) {
  return _coffeesReducer(state, action);
}
