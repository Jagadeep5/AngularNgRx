import { createSelector, State } from '@ngrx/store';
import { IappState } from '../states/appState';
import { IBlockChainState } from '../states/blockChain.state';

const blockchain = (state:IappState) => state.blockchain;

export const selectblockchain = createSelector(
    blockchain, (state:IBlockChainState) => {console.log("In selector"+ state.blockChainStates);return state.blockChainStates} );