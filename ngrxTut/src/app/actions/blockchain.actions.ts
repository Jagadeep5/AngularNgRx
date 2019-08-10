import { Action } from '@ngrx/store';
import { Blockchain } from '../blockchain/blockchain.model';




export const ADD_COIN = "Add";
export class AddCoinToStore implements Action {
    readonly type = ADD_COIN;
    pl:Blockchain = {};
    constructor(private payload:Blockchain){
        this.pl = payload;
    }
}

export const DEL_COIN = "Del";
export class DeleteCoinInStore implements Action {
    readonly type = DEL_COIN;
    constructor(private payload:number){}
}

export type Actions = AddCoinToStore | DeleteCoinInStore;