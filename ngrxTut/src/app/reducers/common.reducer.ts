
import * as acts from '../actions/common.actions';
import { ICommonState, initialComonState } from '../states/common.state';


export function commonReducer(state:ICommonState = initialComonState, action:acts.Actions) {
  switch (action.type) {
      case acts.ADD_EMPLOYEE: {
          return {...state, EmployeeDetailsState:this.EmployeeDetailsState.push(action.payload)}
      }
    default:
        return state;
    }
}