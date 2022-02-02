import * as ActionTypes from "./ActionTypes";

const StaffReducer = (
  state = { isStaffLoading: false, errStaffMess: null, staffs: [] },
  action
) => {
  switch (action.type) {
    case ActionTypes.STAFFS_LOADING:
      return {
        ...state,
        isStaffLoading: true,
        errStaffMess: null,
        staffs: [],
      };
    case ActionTypes.STAFFS_FAILED:
      return {
        ...state,
        isStaffLoading: false,
        errStaffMess: action.payload,
      };
    case ActionTypes.ADD_STAFFS:
      return {
        ...state,
        isStaffLoading: false,
        errStaffMess: null,
        staffs: action.payload,
      };
    default:
      return state;
  }
};

export default StaffReducer;
