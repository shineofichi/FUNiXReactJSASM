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
    case ActionTypes.ADD_STAFF:
      return {
        ...state,
        staffs: state.staffs.concat(action.payload),
      };
    case ActionTypes.DELETE_STAFF:
      return {
        ...state,
        staffs: state.staffs.filter((staff) => staff.id !== action.payload),
      };
    default:
      return state;
  }
};

export default StaffReducer;
