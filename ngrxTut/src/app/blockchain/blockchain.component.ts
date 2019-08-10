import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { appState } from '../appState';
import { Blockchain } from './blockchain.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as acts from '../actions/blockchain.actions';

@Component({
  selector: 'app-blockchain',
  templateUrl: './blockchain.component.html',
  styleUrls: ['./blockchain.component.css']
})
export class BlockchainComponent implements OnInit {
  angForm:FormGroup;
  constructor(private store:Store<appState>, private fb:FormBuilder) {
    this.Createform();
   }

  ngOnInit() {
  }
Createform(){
  this.angForm = this.fb.group({
    name:['',Validators.required],
    price:['', Validators.required]
  });

}
  addCoin(name, price) {
    let bc = <Blockchain>{name:name,price:price};
    this.store.dispatch(new acts.AddCoinToStore(bc));
  }

}
