/*** All code has been written and compiled solely under individual input
 * and has been created with the help of the learning resources provided. ***/ 

import { Component, Input, OnInit} from "@angular/core";
import { select,Store } from "@ngrx/store";
import { Observable } from "rxjs";
import * as CoffeeActions from "src/app/store/actions"
import { isLoadingSelector } from "../store/selectors";
import { AppStateInterface } from "../types/appState.interface";
import { CoffeeInterface } from "../types/coffee.interface";

@Component({
    selector : 'app-coffee-list',
    templateUrl : './coffeeList.component.html',
    styleUrls : ['./coffeeList.component.css']
})

export class CoffeeListComponent implements OnInit{
    @Input() coffee:CoffeeInterface[];
    error$: Observable<string |null>;
    //coffees$: Observable<CoffeeInterface[]>;
    getCoffees$: Observable<boolean>;
    
    constructor(private store: Store <AppStateInterface>) {
        //this.getCoffees$ = this.store.pipe(select(isLoadingSelector));
    }
    
    //constructor(private store: Store <AppStateInterface>){}
    ngOnInit(): void {
        //this.store.dispatch(CoffeeActions.getCoffeeList());
    }

}