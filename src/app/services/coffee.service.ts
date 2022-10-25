/*** All code has been written and compiled solely under individual input
 * and has been created with the help of the learning resources provided. ***/ 

import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {CoffeeInterface} from 'src/app/types/coffee.interface';

@Injectable({
    providedIn: 'root',
})

export class CoffeeService{
    constructor(private http: HttpClient){}

    //isLoadingSelector
    getCoffee(): Observable<CoffeeInterface[]>{
        return this.http.get<CoffeeInterface[]>('https://random-data-api.com/api/coffee/random_coffee?size=50/coffee.json')
        .pipe(
            map((data) => {
                const coffee: CoffeeInterface[] = [];
                for(let key in data) {
                    coffee.push({...data[key], id: key});
                }
                console.log(coffee)
                return coffee;
            })
        )
        // remove Observable if error from above line.
        //return this.http.post<CoffeeInterface[]>('https://random-data-api.com/api/coffee/random_coffee?size=50/coffee.json', {})//.pipe(
//            map((coffees: CoffeeInterface[]) => {
//                return coffees
//            })
//        )
    }
}