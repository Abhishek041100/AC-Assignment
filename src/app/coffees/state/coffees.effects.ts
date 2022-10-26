import { map, mergeMap } from 'rxjs/operators';
import { loadCoffees, loadCoffeesSuccess } from './coffees.actions';
import { CoffeesService } from '../../services/coffee.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';

@Injectable()
export class CoffeesEffects {
  constructor(private actions$: Actions, private coffeesService: CoffeesService) {}

  loadCoffees$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadCoffees),
      mergeMap((action) => {
        return this.coffeesService.getCoffees().pipe(
          map((coffees) => {
            return loadCoffeesSuccess({ coffees });
          })
        );
      })
    );
  });
}
