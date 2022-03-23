import * as ActionTypes from "./ActionTypes";

const DepartmentReducer = (
  state = { isDeptLoading: true, errMess: null, departments: [] },
  action
) => {
  switch (action.type) {
    case ActionTypes.DEPTS_LOADING:
      return {
        ...state,
        isDeptLoading: true,
        errMess: null,
        departments: [],
      };

    case ActionTypes.DEPTS_FAILED:
      return {
        ...state,
        isDeptLoading: false,
        errMess: action.payload,
      };
    case ActionTypes.ADD_DEPTS:
      return {
        ...state,
        isDeptLoading: false,
        errMess: null,
        departments: action.payload,
      };
    default:
      return state;
  }
};

export default DepartmentReducer;
