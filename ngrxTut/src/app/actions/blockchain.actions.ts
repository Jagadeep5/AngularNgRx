import { Action } from '@ngrx/store';
import { Blockchain } from '../models/blockchain.model';




export const ADD_COIN = "[Blockchain] Add";
export class AddCoinToStore implements Action {
    readonly type = ADD_COIN;
    constructor(public payload:Blockchain){
    }
}

export const DEL_COIN = "[Blockchain] Del";
export class DeleteCoinInStore implements Action {
    readonly type = DEL_COIN;
    constructor(public payload:string){
    }
}

export type Actions = AddCoinToStore | DeleteCoinInStore;