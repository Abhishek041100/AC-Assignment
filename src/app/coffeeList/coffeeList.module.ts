import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import { CoffeeListComponent } from './coffeeList.component';
import { CoffeeService } from '../services/coffee.service';
import { StoreModule } from '@ngrx/store';
import { coffeeReducers } from '../store/reducers';

@NgModule({
    declarations: [CoffeeListComponent],
    imports: [CommonModule], //StoreModule.forFeatures({coffees: coffeeReducers })],
    providers:[CoffeeService],
    exports:[CoffeeListComponent]
})
export class CoffeeListModule {}