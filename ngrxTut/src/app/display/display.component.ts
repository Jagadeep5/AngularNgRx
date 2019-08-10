import { Blockchain } from '../blockchain/blockchain.model';
import { Component, OnInit } from '@angular/core';
import { appState } from '../appState';
import { Store } from '@ngrx/store';
import { Observable, of, from, observable, BehaviorSubject } from 'rxjs';
import { ConfigService } from '../Services/config.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  coins: Observable<Blockchain[]>;
  sampleData:Observable<string[]>;
  changeListener:BehaviorSubject<string[]> = new BehaviorSubject<string[]>(["initial1","initial2","initial3"]);
  constructor(private store: Store<appState>, private config:ConfigService) {
    this.coins = this.store.select('blockchain');
    this.sampleData = this.config.SampleData();

   }

  ngOnInit() {
  }

  refresh(){
    this.sampleData.subscribe(x => {this.changeListener.next(x)});
  }

}