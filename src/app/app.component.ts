import { state } from '@angular/animations';
import { Component, OnInit} from '@angular/core';
//import {HttpClient} from '@angular/common/http';
import { CoffeeService } from './services/coffee.service';
import { Store } from '@ngrx/store';
//import {CoffeeInterface} from 'src/app/types/coffee.interface'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
//  coffees: CoffeeInterface[] = []

  constructor(private item: Store, coffeeService: CoffeeService){}
  productList = undefined;
  coffeeAdd = this.item.subscribe((state) => {this.productList=state;
    }
  )
  ngOnInit(): void{
    this.item.dispatch({ type: '[List of Products/API] Get Coffee Success'});
    //this.http.get("https://random-data-api.com/api/coffee/random_coffee")
    //this.coffeeService.getCoffee().subscribe(
    //  res => {console.log('res', res)
    //})
  }
}
