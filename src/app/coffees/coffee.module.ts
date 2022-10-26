import { CoffeesEffects } from './state/coffees.effects';
import { EffectsModule } from '@ngrx/effects';
import { COFFEE_STATE_NAME } from './state/coffees.selector';
import { CoffeeListComponent } from './coffee-list/coffee-list.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { coffeesReducer } from './state/coffees.reducer';

const routes: Routes = [
  {
    path: '',
    component: CoffeeListComponent,
  },
];
@NgModule({
  declarations: [CoffeeListComponent,],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature(COFFEE_STATE_NAME, coffeesReducer),
    EffectsModule.forFeature([CoffeesEffects]),
    EffectsModule.forRoot([]),
  ],
})
export class CoffeesModule {}
