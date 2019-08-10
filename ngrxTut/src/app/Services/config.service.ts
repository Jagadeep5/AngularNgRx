import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {map, filter,catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor() { }

  arrayData:string[] = ["Data1","Data2","Data3","Data4"];

  SampleData():Observable<string[]>{

    return of(this.arrayData).pipe(filter(x => x.length >= 2),map(x => {return x})
    ,catchError(err => {console.log("Error occured");return of([""])}));
  }
}
