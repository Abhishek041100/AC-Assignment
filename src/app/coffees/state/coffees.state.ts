import { Coffee } from '../../models/coffee.model';

export interface CoffeesState {
  coffees: Coffee[];
}

export const initialState: CoffeesState = {
  coffees: null,
};
