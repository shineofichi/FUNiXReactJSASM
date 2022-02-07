import * as ActionTypes from "./ActionTypes";
import { baseUrl } from "../shared/baseUrl";
import { Errors } from "react-redux-form";

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
export const addStaff = (staff) => ({
  type: ActionTypes.ADD_STAFF,
  payload: staff,
});
export const delStaff = (id) => ({
  type: ActionTypes.DELETE_STAFF,
  payload: id,
});

export const postAddNewStaff = (staff) => (dispath) => {
  dispath(staffsLoading(true));
  const newStaff = {
    id: staff.id,
    name: staff.name,
    doB: staff.doB,
    salaryScale: staff.salaryScale,
    startDate: staff.startDate,
    departmentId: staff.department.id,
    annualLeave: staff.annualLeave,
    overTime: staff.overTime,
    image: staff.image,
  };
  dispath(addStaff(newStaff));
  return fetch(baseUrl + "staffs", {
    method: "POST",
    body: JSON.stringify(newStaff),
    headers: {
      "Content-type": "application/json",
    },
    credential: "same-origin",
  })
    .then(
      (response) => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error(
            "Error " + response.status + " : " + response.statusText
          );
          error.message = response;
          throw error;
        }
      },
      (error) => {
        var errmess = new Errors(error.message);
        throw errmess;
      }
    )
    .then((response) => response.json())
    .then((response) => dispath(addStaffs(response)))
    .catch((error) => {
      console.log("POST STAFF INFORMATION ", error.message);
      alert("Error " + error.message);
    });
};

export const deleteStaff = (id) => (dispath) => {
  dispath(staffsLoading(true));
  dispath(delStaff(id));
  return fetch(baseUrl + "staffs/" + id, {
    method: "DELETE",
    header: { "Content-Type": "application/json" },
  })
    .then(
      (response) => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error(
            "Error " + response.status + " : " + response.statusText
          );
          error.message = response;
          throw error;
        }
      },
      (error) => {
        var errmess = new Errors(error.message);
        throw errmess;
      }
    )
    .then((response) => response.json())
    .then((response) => dispath(addStaffs(response)))
    .catch((error) => {
      console.log("DELETE STAFF ERROR ", error.message);
      alert("Error " + error.message);
    });
};

export const editStaffInfo = (staff) => (dispath) => {
  dispath(staffsLoading(true));
  return fetch(baseUrl + "staffs", {
    method: "PATCH",
    body: JSON.stringify(staff),
    headers: {
      "Content-type": "application/json",
    },
    credential: "same-origin",
  })
    .then(
      (response) => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error(
            "Error " + response.status + " : " + response.statusText
          );
          error.message = response;
          throw error;
        }
      },
      (error) => {
        var errmess = new Errors(error.message);
        throw errmess;
      }
    )
    .then((response) => response.json())
    .then((response) => dispath(addStaffs(response)))
    .catch((error) => {
      console.log("EDIT STAFF ERROR ", error.message);
      alert("Error " + error.message);
    });
};

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

// --------------
export const fetchStaffsInDept = (deptId) => (dispath) => {
  dispath(staffsInDeptLoading(true));
  return fetch(baseUrl + "departments/" + deptId)
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
    .then((staff) => dispath(addStaffsInDept(staff)))
    .catch((error) => dispath(staffInDeptFailed(error.message)));
};
export const staffsInDeptLoading = () => ({
  type: ActionTypes.STAFF_IN_DEPT_LOADING,
});
export const addStaffsInDept = (staff) => ({
  type: ActionTypes.ADD_STAFF_IN_DEPT,
  payload: staff,
});
export const staffInDeptFailed = (errMess) => ({
  type: ActionTypes.STAFF_IN_DEPT_FAILED,
  payload: errMess,
});
