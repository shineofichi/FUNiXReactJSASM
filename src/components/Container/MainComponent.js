import React, { Component } from "react";
import { Route, Routes, useParams, Navigate } from "react-router-dom";
import StaffList from "../Presentational/StaffListComponent";
import Header from "../Presentational/HeaderComponent";
import Footer from "../Presentational/FooterComponent";
import Department from "../Presentational/DepartmentComponent";
import StaffDetail from "../Presentational/StaffDetailComponent";
import Salary from "../Presentational/SalaryComponent";
import DepDetail from "../Presentational/DepDetailComponent";
import SalaryDetail from "../Presentational/SalaryDetailComponent";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    staffs: state.staffs,
    departments: state.departments,
    basicSalary: state.basicSalary,
    overTimeSalary: state.overTimeSalary,
  };
};

class Main extends Component {
  render() {
    const StaffWithId = () => {
      const params = useParams();
      return (
        <StaffDetail
          staff={
            this.props.staffs.filter(
              (staff) => staff.id === parseInt(params.id, 10)
            )[0]
          }
        />
      );
    };
    const DepDetailWithId = () => {
      const params = useParams();
      return (
        <DepDetail
          staffs={this.props.staffs.filter(
            (staff) => staff.department.id === params.id
          )}
          dep={this.props.departments.filter((dep) => dep.id === params.id)[0]}
        />
      );
    };
    const SalaryWithId = () => {
      const params = useParams();
      return (
        <SalaryDetail
          staff={
            this.props.staffs.filter(
              (staff) => staff.id === parseInt(params.id, 10)
            )[0]
          }
          basicSalary={this.props.basicSalary}
          overTimeSalary={this.props.overTimeSalary}
        />
      );
    };
    return (
      <div>
        <Header />
        <Routes>
          <Route
            path="/staffs"
            element={<StaffList staffs={this.props.staffs} />}
          />
          <Route path="/staffs/:id" element={<StaffWithId />} />
          <Route
            path="/dep"
            element={<Department deps={this.props.departments} />}
          />
          <Route path="/dep/:id" element={<DepDetailWithId />} />
          <Route
            path="/salary"
            element={
              <Salary
                staffs={this.props.staffs}
                basic={this.props.basicSalary}
                overTimeSalary={this.props.overTimeSalary}
              />
            }
          />
          <Route
            path="/salary/:id"
            element={
              <SalaryWithId
                staffs={this.props.staffs}
                basic={this.props.basicSalary}
                overTimeSalary={this.props.overTimeSalary}
              />
            }
          />
          <Route path="*" element={<Navigate to="/staffs" />} />
        </Routes>

        <Footer />
      </div>
    );
  }
}

export default connect(mapStateToProps)(Main);
