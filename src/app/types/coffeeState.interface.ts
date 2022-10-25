import {CoffeeInterface} from './coffee.interface';

export interface CoffeeStateInterface {
    //isLoading: boolean;
    coffee: CoffeeInterface[];
    //coffees: CoffeeInterface[];
    //error: string | null;
}

export const initialState: CoffeeStateInterface = {
    coffee: null,
};