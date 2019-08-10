import { Blockchain } from './blockchain/blockchain.model';

export interface appState{
    readonly blockChain: Blockchain[];
}