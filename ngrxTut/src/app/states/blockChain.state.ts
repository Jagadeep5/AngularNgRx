import { Blockchain } from '../models/blockchain.model';


export interface IBlockChainState{
    blockChainStates: Blockchain[];
}

export const initialBlockChainState:IBlockChainState = {
    blockChainStates:[]
}