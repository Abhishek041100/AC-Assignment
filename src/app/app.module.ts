import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CoffeeListModule } from './coffeeList/coffeeList.module';
//import { CoffeeListComponent } from './coffeeList/coffeeList.component';

import { coffeeReducers} from 'src/app/store/reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { StoreModule } from '@ngrx/store'; // Angular CLI environment
import { CoffeeService } from './services/coffee.service';
import { EffectsModule } from '@ngrx/effects';
import { CoffeesEffects } from './store/effects';

@NgModule({
  declarations: [
    AppComponent,
    //CoffeeListComponent,
  ],
  imports: [
    
    BrowserModule,
    CoffeeListModule,
    HttpClientModule,
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
      autoPause: true, // Pauses recording actions and state changes when the extension window is not open
    }),
    StoreModule.forRoot({coffees: coffeeReducers }),
    EffectsModule.forRoot([CoffeesEffects]),
    //EffectsModule.forFeature([CoffeesEffects]),
  ],
  providers: [CoffeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
