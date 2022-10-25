/*** All code has been written and compiled solely under individual input
 * and has been created with the help of the learning resources provided. ***/ 

import { Component, Input, OnInit} from "@angular/core";
import { select,Store } from "@ngrx/store";
import { Observable } from "rxjs";
import * as CoffeeActions from "src/app/store/actions"
import { isLoadingSelector} from "../store/selectors";
import { AppStateInterface } from "../types/appState.interface";
import { getCoffeeList } from "src/app/store/actions";

import { CoffeeInterface } from "../types/coffee.interface";
import { CoffeeService } from "../services/coffee.service";

@Component({
    selector : 'app-coffee-list',
    templateUrl : './coffeeList.component.html',
    styleUrls : ['./coffeeList.component.css']
})

export class CoffeeListComponent implements OnInit{
    //@Input() coffee:CoffeeInterface[];
    error$: Observable<string |null>;
    //coffees$: Observable<CoffeeInterface[]>;
    coffee: Observable<CoffeeInterface[]>;
    getCoffees$: Observable<boolean>;
    
    constructor(private store: Store <AppStateInterface>) {
        //this.getCoffees$ = this.store.pipe(select(isLoadingSelector));
    }
    
    ngOnInit(): void {
        //this.coffee = this.store.select(isLoadingSelector);
        //this.coffee = this.store.select(this.getCoffee);
        //this.store.subscribe(CoffeeActions.getCoffeeList(coffee));
        this.store.dispatch(getCoffeeList());
    }

}