import { Coffee } from '../models/coffee.model'
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class CoffeesService {
  constructor(private http: HttpClient) {}

  getCoffees(): Observable<Coffee[]> {
    return this.http
      .get<Coffee[]>(`https://random-data-api.com/api/coffee/random_coffee?size=50/coffee.json`)
      .pipe(
        map((data) => {
          const coffees: Coffee[] = [];
          for (let key in data) {
            coffees.push({ ...data[key], id: key });
          }
          return coffees;
        })
      );
  }
}
