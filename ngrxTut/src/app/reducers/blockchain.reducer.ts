
import * as acts from '../actions/blockchain.actions';
import { IBlockChainState, initialBlockChainState } from '../states/blockChain.state';



export const BlockChainReducer = (state:IBlockChainState = initialBlockChainState, action:acts.Actions):IBlockChainState => {
  switch (action.type) {
    case acts.ADD_COIN:
        return {...state, blockChainStates: state.blockChainStates.concat(action.payload) }
    case acts.DEL_COIN:
        return {...state, blockChainStates: state.blockChainStates.filter(x => x.name != action.payload)}
    default:
        return state;
    }
}