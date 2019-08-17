import { Blockchain } from '../models/blockchain.model';
import { Component, OnInit } from '@angular/core';
import { IappState } from '../states/appState';
import { Store, select } from '@ngrx/store';
import { Observable, of, from, observable, BehaviorSubject, config } from 'rxjs';
import { ConfigService } from '../Services/config.service';
import * as acts from '../actions/blockchain.actions';
import { selectblockchain } from '../Selectors/blockchain.selector';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  coins: Observable<Blockchain[]>;
  sampleData:Observable<string[]>;
  ChangeLi:Observable<string[]>;
  ChangeLiArray:string[];
  
  constructor(private store: Store<IappState>, private config:ConfigService) {
    this.coins = this.store.pipe(select(selectblockchain));
    this.sampleData = this.config.SampleData();
    this.ChangeLi = this.config.changeListener;
    this.ChangeLiArray = this.config.changeListener.getValue();
   }

  ngOnInit() {
  }

  refresh(){
    this.sampleData.subscribe(x => {this.config.changeListener.next(x)});
  }
  DelectCoin(name:string){
    this.store.dispatch(new acts.DeleteCoinInStore(name));
    this.config.changeListener.next(["abc","xyz","pqr"]);
  }

}