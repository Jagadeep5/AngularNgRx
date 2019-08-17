
import { EmployeeDetails } from '../models/Employee.model';


export interface ICommonState{
    EmployeeDetailsState:EmployeeDetails[];
    currentTimeAndDate:string;
}

export const initialComonState = {
    EmployeeDetailsState:null,
    currentTimeAndDate:null
}