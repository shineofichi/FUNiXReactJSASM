import * as ActionTypes from "./ActionTypes";

const SalaryReducer = (
  state = { isSalaryLoading: false, salaryErrMess: null, salary: [] },
  action
) => {
  switch (action.type) {
    case ActionTypes.SALARY_LOADING:
      return {
        isSalaryLoading: true,
        salaryErrMess: null,
        salary: [],
      };
    case ActionTypes.SALARY_FAILED:
      return {
        isSalaryLoading: false,
        salaryErrMess: action.payload,
      };
    case ActionTypes.ADD_SALARY:
      return {
        isSalaryLoading: false,
        salaryErrMess: null,
        salary: action.payload,
      };
    default:
      return state;
  }
};
export default SalaryReducer;
