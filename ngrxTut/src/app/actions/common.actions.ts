import { Action } from '@ngrx/store';
import { FormGroup } from '@angular/forms';



export const ADD_EMPLOYEE = "[Common] Add Employee";
export class AddEmployee implements Action {
    readonly type = ADD_EMPLOYEE;
    constructor(public payload:FormGroup){
    }
}

export type Actions = AddEmployee;