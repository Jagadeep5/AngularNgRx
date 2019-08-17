import { ActionReducerMap } from '@ngrx/store';
import { IappState } from '../states/appState';
import { routerReducer } from '@ngrx/router-store';
import { BlockChainReducer } from './blockchain.reducer';
import { commonReducer } from './common.reducer';


export const appReducer: ActionReducerMap<IappState,any> = {
    router:routerReducer,
    blockchain:BlockChainReducer,
    common:commonReducer
}