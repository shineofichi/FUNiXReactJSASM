import * as ActionTypes from "./ActionTypes";

const StaffsInDeptReducer = (
  state = {
    isStaffsInDeptLoading: false,
    errStaffsInDeptMess: null,
    staffsInDept: [],
  },
  action
) => {
  switch (action.type) {
    case ActionTypes.STAFF_IN_DEPT_LOADING:
      return {
        ...state,
        isStaffsInDeptLoading: true,
        errStaffsInDeptMess: null,
      };
    case ActionTypes.STAFF_IN_DEPT_FAILED:
      return {
        ...state,
        isStaffsInDeptLoading: false,
        errStaffsInDeptMess: action.payload,
      };
    case ActionTypes.ADD_STAFF_IN_DEPT:
      return {
        ...state,
        isStaffsInDeptLoading: false,
        errStaffsInDeptMess: null,
        staffsInDept: action.payload,
      };

    default:
      return state;
  }
};

export default StaffsInDeptReducer;
