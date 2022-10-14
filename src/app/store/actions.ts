/*** All code has been written and compiled solely under individual input
 * and has been created with the help of the learning resources provided. ***/ 

import {createAction, props} from "@ngrx/store";
import {CoffeeInterface} from '../types/coffee.interface';

//export const getCoffeeFailure = createAction('[Coffee] Get Coffee Failure, 
//  props<{ error: string}>());')
export const getCoffeeSuccess = createAction(
    '[Coffee] Get Coffee success', 
    props<{ coffee: CoffeeInterface[]}>()
);
export const getCoffeeList = createAction(
    '[List of Products/API] Get Coffee List', 
    props<{coffee: CoffeeInterface[]}>()
);
