/*** All code has been written and compiled solely under individual input
 * and has been created with the help of the learning resources provided. ***/ 

//import {CoffeeStateInterface} from 'src/app/types/coffeeState.interface';
import {CoffeeInterface} from 'src/app/types/coffee.interface';
import {createReducer, on} from '@ngrx/store';
import { AppStateInterface } from '../types/appState.interface';
import {getCoffeeList, getCoffeeSuccess}  from 'src/app/store/actions';
import { CoffeesEffects } from './effects';
import * as CoffeeActions from './actions';

/*export interface CoffeeInterface {
    isloading: 'false' | 'true';
    error: string;
    coffee: CoffeeStateInterface[]; 
}*/

export const initialState: AppStateInterface = {
    //isLoading: false,
    coffees: [],
    //error: null,
};
// Gets the original state duplicated back using a spread operator
export const coffeeReducers = createReducer(
    initialState,on(CoffeeActions.getCoffeeList,(state) => ({...state, isLoading: true})),
    on(CoffeeActions.getCoffeeSuccess,(state, content) => ({...state, isLoading: false, coffees: content.coffee}))
    //on(CoffeeActions.getCoffeeFailure,(state, content) => ({...state, isLoading: false, }))
);
//Supplying the initial state and adding the new coffees to the coffees array.