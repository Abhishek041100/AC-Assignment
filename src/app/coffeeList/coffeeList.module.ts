import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import { CoffeeListComponent } from './coffeeList.component';
import { CoffeeService } from '../services/coffee.service';
import { StoreModule } from '@ngrx/store';
import { coffeeReducers } from '../store/reducers';
import { EffectsModule } from '@ngrx/effects';
import { CoffeesEffects } from '../store/effects';

@NgModule({
    declarations: [CoffeeListComponent],
    imports: [CommonModule, EffectsModule.forFeature([CoffeesEffects])],
     //StoreModule.forFeatures({coffees: coffeeReducers })],
    providers:[CoffeeService],
    exports:[CoffeeListComponent]
})
export class CoffeeListModule {}