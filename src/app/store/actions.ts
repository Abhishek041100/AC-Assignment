/*** All code has been written and compiled solely under individual input
 * and has been created with the help of the learning resources provided. ***/ 

import {createAction, props} from "@ngrx/store";
import {CoffeeInterface} from '../types/coffee.interface';

//export const getCoffeeFailure = createAction('[Coffee] Get Coffee Failure, 
//  props<{ error: string}>());')

export const GET_COFFEE_SUCCESS = '[Coffee] Get Coffee success';
//export const GET_COFFEE_LIST = '[List of Products/API] Get Coffee List';
export const GET_COFFEE_LIST = '[Coffee] Get Coffee list';

export const getCoffeeSuccess = createAction(
    GET_COFFEE_SUCCESS, 
    props<{ coffee: CoffeeInterface[]}>()
);
export const getCoffeeList = createAction(
    GET_COFFEE_LIST, 
    //props<{coffee: CoffeeInterface[]}>()
    
);
