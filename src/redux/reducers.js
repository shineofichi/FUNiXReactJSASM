import { combineReducers } from "redux";
import StaffReducer from "./staffs";
import DepartmentReducer from "./departments";
import { createForms } from "react-redux-form";
import SalaryReducer from "./salary";
import { initidalAddStaffForm } from "./addStaffForm";

const Reducer = combineReducers({
  staffs: StaffReducer,
  departments: DepartmentReducer,
  salary: SalaryReducer,
  ...createForms({
    addStaff: initidalAddStaffForm,
  }),
});

export default Reducer;
