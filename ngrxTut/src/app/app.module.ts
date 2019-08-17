import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlockchainComponent } from './blockchain/blockchain.component';
import { StoreModule } from '@ngrx/store';
import { appReducer } from './reducers/app.reducer';
import { ReactiveFormsModule } from '@angular/forms';
import { DisplayComponent } from './display/display.component';
import { PromiseComponent } from './promise/promise.component';
import { NgrxComponent } from './ngrx/ngrx.component';
import { StoreRouterConnectingModule } from '@ngrx/router-store';

@NgModule({
  declarations: [
    AppComponent,
    BlockchainComponent,
    DisplayComponent,
    PromiseComponent,
    NgrxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(appReducer),
    StoreRouterConnectingModule.forRoot({ stateKey: 'router'}),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
