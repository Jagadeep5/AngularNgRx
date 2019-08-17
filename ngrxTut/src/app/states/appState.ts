import { IBlockChainState } from './blockChain.state';
import { ICommonState } from './common.state';
import { RouterReducerState } from '@ngrx/router-store';

export interface IappState{
    router?:RouterReducerState;
    blockchain:IBlockChainState;
    common:ICommonState
}