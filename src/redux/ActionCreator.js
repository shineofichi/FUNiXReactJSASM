import * as ActionTypes from "./ActionTypes";
import { baseUrl } from "../shared/baseUrl";

export const fetchStaffs = () => (dispath) => {
  dispath(staffsLoading(true));
  return fetch(baseUrl + "staffs")
    .then(
      (response) => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error(
            "Error " + response.status + ": " + response.statusText
          );
          error.message = response;
          throw error;
        }
      },
      (error) => {
        var errmess = new Error(error.message);
        throw errmess;
      }
    )
    .then((response) => response.json())
    .then((staffs) => dispath(addStaffs(staffs)))
    .catch((error) => dispath(staffsFailed(error.message)));
};
export const staffsLoading = () => ({
  type: ActionTypes.STAFFS_LOADING,
});
export const addStaffs = (staffs) => ({
  type: ActionTypes.ADD_STAFFS,
  payload: staffs,
});
export const staffsFailed = (errMess) => ({
  type: ActionTypes.STAFFS_FAILED,
  payload: errMess,
});

export const fetchDepts = () => (dispath) => {
  dispath(deptsLoading(true));
  return fetch(baseUrl + "departments")
    .then(
      (response) => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error(
            "Error " + response.status + ": " + response.statusText
          );
          error.message = response;
          throw error;
        }
      },
      (error) => {
        var errmess = new Error(error.message);
        throw errmess;
      }
    )
    .then((response) => response.json())
    .then((departments) => dispath(addDepts(departments)))
    .catch((error) => dispath(deptsFailed(error.message)));
};
export const deptsLoading = () => ({
  type: ActionTypes.DEPTS_LOADING,
});
export const addDepts = (departments) => ({
  type: ActionTypes.ADD_DEPTS,
  payload: departments,
});
export const deptsFailed = (errMess) => ({
  type: ActionTypes.DEPTS_FAILED,
  payload: errMess,
});

export const fetchSalary = () => (dispath) => {
  dispath(salaryLoading(true));
  return fetch(baseUrl + "staffsSalary")
    .then(
      (response) => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error(
            "Error " + response.status + ": " + response.statusText
          );
          error.message = response;
          throw error;
        }
      },
      (error) => {
        var errmess = new Error(error.message);
        throw errmess;
      }
    )
    .then((response) => response.json())
    .then((salary) => dispath(addSalary(salary)))
    .catch((error) => dispath(salaryFailed(error.message)));
};
export const salaryLoading = () => ({
  type: ActionTypes.SALARY_LOADING,
});
export const addSalary = (salary) => ({
  type: ActionTypes.ADD_SALARY,
  payload: salary,
});
export const salaryFailed = (errMess) => ({
  type: ActionTypes.SALARY_FAILED,
  payload: errMess,
});
