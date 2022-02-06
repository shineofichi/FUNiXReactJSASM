import React, { useEffect } from "react";
import {
  Route,
  Routes,
  useParams,
  Navigate,
  useLocation,
} from "react-router-dom";
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
} from "../../redux/ActionCreator";
import { TransitionGroup, CSSTransition } from "react-transition-group";

const mapStateToProps = (state) => {
  return {
    staffs: state.staffs,
    departments: state.departments,
    salary: state.salary,
  };
};

const mapDispathToProps = (dispath) => ({
  fetchSalary: () => dispath(fetchSalary()),
  fetchStaffs: () => dispath(fetchStaffs()),
  fetchDepts: () => dispath(fetchDepts()),
  postAddNewStaff: (staff) => dispath(postAddNewStaff(staff)),
  deleteStaff: (id) => dispath(deleteStaff(id)),
  editStaffInfo: (staff) => dispath(editStaffInfo(staff)),
});

function Main(props) {
  useEffect(() => {
    props.fetchStaffs();
    props.fetchDepts();
    props.fetchSalary();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const location = useLocation();
  const StaffWithId = () => {
    const params = useParams();
    return (
      <StaffDetail
        staff={
          props.staffs.staffs.filter(
            (staff) => staff.id === parseInt(params.id, 10)
          )[0]
        }
        departments={props.departments}
      />
    );
  };
  const DepDetailWithId = () => {
    const params = useParams();
    return (
      <DeptDetail
        staffs={props.staffs.staffs.filter(
          (staff) => staff.departmentId === params.id
        )}
        department={
          props.departments.departments.filter(
            (dept) => dept.id === params.id
          )[0]
        }
      />
    );
  };
  return (
    <div>
      <Header />
      <TransitionGroup>
        <CSSTransition key={location.key} classNames="page" timeout={300}>
          <Routes location={location}>
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
        </CSSTransition>
      </TransitionGroup>
      <Footer />
    </div>
  );
}

export default connect(mapStateToProps, mapDispathToProps)(Main);
