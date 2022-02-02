import React, { Component } from "react";
import { Route, Routes, useParams, Navigate } from "react-router-dom";
import StaffList from "../Presentational/StaffListComponent";
import Header from "../Presentational/HeaderComponent";
import Footer from "../Presentational/FooterComponent";
import Department from "../Presentational/DepartmentComponent";
import StaffDetail from "../Presentational/StaffDetailComponent";
import Salary from "../Presentational/SalaryComponent";
import DepDetail from "../Presentational/DepDetailComponent";
import { connect } from "react-redux";
import {
  fetchDepts,
  fetchStaffs,
  fetchSalary,
} from "../../redux/ActionCreator";

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
});

class Main extends Component {
  componentDidMount() {
    this.props.fetchDepts();
    this.props.fetchStaffs();
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
          department={
            this.props.departments.departments.filter(
              (dept) =>
                dept.id ===
                this.props.staffs.staffs.filter(
                  (staff) => staff.id === parseInt(params.id, 10)
                )[0].departmentId
            )[0]
          }
        />
      );
    };
    const DepDetailWithId = () => {
      const params = useParams();
      return (
        <DepDetail
          staffs={this.props.staffs.staffs.filter(
            (staff) => staff.departmentId === params.id
          )}
          dep={
            this.props.departments.departments.filter(
              (dep) => dep.id === params.id
            )[0]
          }
        />
      );
    };
    return (
      <div>
        <Header />
        <Routes>
          <Route
            path="/staffs"
            element={<StaffList staffs={this.props.staffs.staffs} />}
          />
          <Route path="/staffs/:id" element={<StaffWithId />} />
          <Route
            path="/dep"
            element={<Department deps={this.props.departments.departments} />}
          />
          <Route path="/dep/:id" element={<DepDetailWithId />} />
          <Route
            path="/salary"
            element={<Salary salary={this.props.salary.salary} />}
          />
          <Route path="*" element={<Navigate to="/staffs" />} />
        </Routes>

        <Footer />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispathToProps)(Main);
