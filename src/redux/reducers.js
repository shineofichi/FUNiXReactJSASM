import { combineReducers } from "redux";
import StaffReducer from "./staffs";
import DepartmentReducer from "./departments";
import SalaryReducer from "./salary";
import StaffsInDeptReducer from "./staffInDept";

const Reducer = combineReducers({
  staffs: StaffReducer,
  departments: DepartmentReducer,
  salary: SalaryReducer,
  staffInDept: StaffsInDeptReducer,
});

export default Reducer;
