import { getCoffees } from '../state/coffees.selector';
import { Coffee } from '../../models/coffee.model';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { loadCoffees } from '../state/coffees.actions';

@Component({
  selector: 'app-coffee-list',
  templateUrl: './coffee-list.component.html',
  styleUrls: ['./coffee-list.component.css'],
})
export class CoffeeListComponent implements OnInit {
  coffees: Observable<Coffee[]>;
  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.coffees = this.store.select(getCoffees);
    this.store.dispatch(loadCoffees());
  }
}
