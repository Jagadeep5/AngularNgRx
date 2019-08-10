import { Blockchain } from '../blockchain/blockchain.model';
import { Action } from '@ngrx/store';
import * as acts from '../actions/blockchain.actions';

export const ADD_COIN = 'ADD_COIN';

export function addCoinReducer(state: Blockchain[] = [], action:acts.Actions) {
  switch (action.type) {
    case acts.ADD_COIN:
        return [...state, action.pl];
    default:
        return state;
    }
}