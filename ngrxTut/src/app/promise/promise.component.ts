import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../Services/config.service';

@Component({
  selector: 'app-promise',
  templateUrl: './promise.component.html',
  styleUrls: ['./promise.component.css']
})
export class PromiseComponent implements OnInit {

  myPromises:string;

  constructor(private config:ConfigService) { 
    this.config.changeListener2.subscribe(x => {this.myPromises = x});
  }

  ngOnInit() {
  }

  startPromise(){
    this.config.SampleDataFromPromise().then(x => {console.log(x)});
  }



}
