/*** All code has been written and compiled solely under individual input
 * and has been created with the help of the learning resources provided. ***/ 

import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType} from '@ngrx/effects';
import { map, mergeMap } from "rxjs";
//import { Actions } from "@ngrx/store-devtools/src/reducer";
import { CoffeeService } from "../services/coffee.service";
import { AppStateInterface } from "../types/appState.interface";
import { getCoffeeSuccess } from "./actions";

@Injectable()
export class CoffeesEffects{

    getCoffees$ = createEffect(() => {
        return this.actions$.pipe(
            ofType('[List of Products/API] Get Coffee List'),
            mergeMap(() => this.coffeeService.getCoffee().pipe
            (map((coffee) => { return getCoffeeSuccess({ coffee }); }))
            ))
            //catchError((error)=>
            //of(CoffeeActions.getCoffeeFailure({error: error.message}))));
    }
    );
    constructor(
        private actions$: Actions,
        private coffeeService: CoffeeService
//        private store: Store<AppStateInterface>
    ) {}
}
