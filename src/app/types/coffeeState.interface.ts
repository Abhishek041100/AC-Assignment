import {CoffeeInterface} from './coffee.interface';

export interface CoffeeStateInterface {
    isLoading: boolean;
    coffees: CoffeeInterface[];
    error: string | null;
}
