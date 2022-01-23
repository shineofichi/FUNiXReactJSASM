import { STAFFS, DEPARTMENTS } from "../shared/staffs";

const initialState = {
  staffs: STAFFS,
  departments: DEPARTMENTS,
  basicSalary: 3000000,
  overTimeSalary: 200000,
};

const staffReducer = (state = initialState, action) => {
  return state;
};

export default staffReducer;
