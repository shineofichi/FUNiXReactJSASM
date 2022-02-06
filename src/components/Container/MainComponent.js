import React, { Component } from "react";
import {
  Route,
  Routes,
  useParams,
  Navigate,
  useLocation,
  useNavigate,
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

// WRAPPER  withRouter for use Location
// Source : https://reactrouter.com/docs/en/v6/faq
function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return <Component {...props} router={{ location, navigate, params }} />;
  }

  return ComponentWithRouterProp;
}

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

class Main extends Component {
  componentDidMount() {
    this.props.fetchStaffs();
    this.props.fetchDepts();
    this.props.fetchSalary();
  }
  render() {
    const StaffWithId = () => {
      const params = useParams();
      return (
        <StaffDetail
          staff={
            this.props.staffs.staffs.filter(
              (staff) => staff.id === parseInt(params.id, 10)
            )[0]
          }
          departments={this.props.departments}
        />
      );
    };
    const DepDetailWithId = () => {
      const params = useParams();
      return (
        <DeptDetail
          staffs={this.props.staffs.staffs.filter(
            (staff) => staff.departmentId === params.id
          )}
          department={
            this.props.departments.departments.filter(
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
          <CSSTransition
            key={this.props.router.location.key}
            classNames="page"
            timeout={300}
          >
            <Routes location={this.props.router.location}>
              <Route
                path="/staffs"
                element={
                  <StaffList
                    staffs={this.props.staffs.staffs}
                    isLoading={this.props.staffs.isStaffLoading}
                    errMess={this.props.staffs.errStaffMess}
                    postAddNewStaff={this.props.postAddNewStaff}
                    deleteStaff={this.props.deleteStaff}
                    editStaffInfo={this.props.editStaffInfo}
                  />
                }
              />
              <Route path="/staffs/:id" element={<StaffWithId />} />
              <Route
                path="/dep"
                element={
                  <Department deps={this.props.departments.departments} />
                }
              />
              <Route path="/dep/:id" element={<DepDetailWithId />} />
              <Route
                path="/salary"
                element={<Salary salary={this.props.salary.salary} />}
              />
              <Route path="*" element={<Navigate to="/staffs" />} />
            </Routes>
          </CSSTransition>
        </TransitionGroup>
        <Footer />
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispathToProps)(Main));
