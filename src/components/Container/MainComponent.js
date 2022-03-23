/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { Route, Routes, useParams, Navigate } from "react-router-dom";
import StaffList from "../Presentational/StaffListComponent";
import Header from "../Presentational/HeaderComponent";
import Footer from "../Presentational/FooterComponent";
import Department from "../Presentational/DepartmentComponent";
import StaffDetail from "../Presentational/StaffDetailComponent";
import Salary from "../Presentational/SalaryComponent";
import DeptDetail from "../Presentational/DeptDetailComponent";
import { connect } from "react-redux";
import {
  fetchDepts,
  fetchStaffs,
  fetchSalary,
  postAddNewStaff,
  deleteStaff,
  editStaffInfo,
  fetchStaffsInDept,
  addStaffsInDept,
  handleDeptId,
} from "../../redux/ActionCreator";

// Set props base on redux state
const mapStateToProps = (state) => {
  return {
    staffs: state.staffs,
    departments: state.departments,
    salary: state.salary,
    staffInDept: state.staffInDept,
  };
};

// Dispath Action base on redux Action
const mapDispathToProps = (dispath) => ({
  fetchSalary: () => dispath(fetchSalary()),
  fetchStaffs: () => dispath(fetchStaffs()),
  fetchDepts: () => dispath(fetchDepts()),
  postAddNewStaff: (staff) => dispath(postAddNewStaff(staff)),
  deleteStaff: (id) => dispath(deleteStaff(id)),
  editStaffInfo: (staff) => dispath(editStaffInfo(staff)),
  fetchStaffsInDept: (deptId) => dispath(fetchStaffsInDept(deptId)),
  addStaffsInDept: () => dispath(addStaffsInDept()),
  handleDeptId: (id) => dispath(handleDeptId(id)),
});

function Main(props) {
  const [deptId, setDeptId] = useState("");
  // Fetch Data on server after rendered
  useEffect(() => {
    props.fetchStaffs();
    props.fetchDepts();
    props.fetchSalary();
    props.fetchStaffsInDept(deptId);
  }, [deptId]);
  // if (props.staffInDept.deptId) {
  //   props.fetchStaffsInDept(props.staffInDept.deptId);
  // }
  const StaffWithId = () => {
    const params = useParams();
    return (
      <StaffDetail
        staff={
          props.staffs.staffs.filter(
            (staff) => staff.id === parseInt(params.id, 10)
          )[0]
        }
        departments={props.departments.departments}
      />
    );
  };
  const DepDetailWithId = () => {
    const params = useParams();
    setDeptId(params.id);
    return (
      <DeptDetail
        staffs={props.staffInDept.staffsInDept}
        department={
          props.departments.departments.filter(
            (dept) => dept.id === params.id
          )[0]
        }
        isStaffLoading={props.staffs.isStaffLoading}
        isDeptLoading={props.departments.isDeptLoading}
      />
    );
  };
  return (
    <div>
      <Header />
      <Routes>
        <Route
          path="/staffs"
          element={
            <StaffList
              staffs={props.staffs.staffs}
              isLoading={props.staffs.isStaffLoading}
              errMess={props.staffs.errStaffMess}
              postAddNewStaff={props.postAddNewStaff}
              deleteStaff={props.deleteStaff}
              editStaffInfo={props.editStaffInfo}
            />
          }
        />
        <Route path="/staffs/:id" element={<StaffWithId />} />
        <Route
          path="/dep"
          element={<Department deps={props.departments.departments} />}
        />
        <Route path="/dep/:id" element={<DepDetailWithId />} />
        <Route
          path="/salary"
          element={<Salary salary={props.salary.salary} />}
        />
        <Route path="*" element={<Navigate to="/staffs" />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default connect(mapStateToProps, mapDispathToProps)(Main);
