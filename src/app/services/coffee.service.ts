/*** All code has been written and compiled solely under individual input
 * and has been created with the help of the learning resources provided. ***/ 

import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import {Observable} from 'rxjs';
//import {map} from 'rxjs/operators';
import {CoffeeInterface} from 'src/app/types/coffee.interface';

@Injectable()
export class CoffeeService{
    constructor(private http: HttpClient){}

    getCoffee(): Observable<CoffeeInterface[]>{
        return this.http.get<CoffeeInterface[]>('https://random-data-api.com/api/coffee/random_coffee?size=50')//.pipe(
//            map((coffees: CoffeeInterface[]) => {
//                return coffees
//            })
//        )
    }
}