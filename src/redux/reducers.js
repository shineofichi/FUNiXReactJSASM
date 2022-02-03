import { combineReducers } from "redux";
import StaffReducer from "./staffs";
import DepartmentReducer from "./departments";
import SalaryReducer from "./salary";

const Reducer = combineReducers({
  staffs: StaffReducer,
  departments: DepartmentReducer,
  salary: SalaryReducer,
});

export default Reducer;
