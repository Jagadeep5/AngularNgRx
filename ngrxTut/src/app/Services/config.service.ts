import { Injectable } from '@angular/core';
import { Observable, of, BehaviorSubject } from 'rxjs';
import {map, filter,catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor() { }

  arrayData:string[] = ["Data1","Data2","Data3","Data4"];
  changeListener:BehaviorSubject<string[]> = new BehaviorSubject<string[]>(["initial1","initial2","initial3"]);
  changeListener2:BehaviorSubject<string> = new BehaviorSubject<string>('initiated');

  SampleData():Observable<string[]>{
    return of(this.arrayData).pipe(filter(x => x.length >= 2),map(x => {return x})
    ,catchError(err => {console.log("Error occured");return of([""])}));
  }
  
  SampleDataFromPromise():Promise<string>{
    let a:string = '';
    return new Promise((resolve,reject) => {
      this.changeListener2.next('Promise started...');
      console.log(this.changeListener2.getValue());
      setTimeout(() => {
        this.changeListener2.next('Promise after +4 secs in progress...');
        console.log(this.changeListener2.getValue());
        a = "Promise completed after 6.something secs";
      },6000);
      setTimeout(() => {
        this.changeListener2.next('Promise still in progress...');
        console.log(this.changeListener2.getValue());
      },2000);
      this.changeListener2.next('Promise in progress...');
      console.log(this.changeListener2.getValue());
      resolve(a);

    });
  }


}
