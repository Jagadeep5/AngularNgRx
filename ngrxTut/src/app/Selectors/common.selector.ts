import { IappState } from '../states/appState';
import { createSelector } from '@ngrx/store';
import { ICommonState } from '../states/common.state';

const stateSlice = (state:IappState) => state.common;

export const selectUserList = createSelector(stateSlice, (state:ICommonState) => state.EmployeeDetailsState )