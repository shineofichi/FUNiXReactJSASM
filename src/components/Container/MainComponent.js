import React, { Component } from "react";
import { Route, Routes, useParams, Navigate } from "react-router-dom";
import { STAFFS, DEPARTMENTS } from "../../shared/staffs";
import StaffList from "../Presentational/StaffListComponent";
import Header from "../Presentational/HeaderComponent";
import Footer from "../Presentational/FooterComponent";
import Department from "../Presentational/DepartmentComponent";
import StaffDetail from "../Presentational/StaffDetailComponent";
import Salary from "../Presentational/SalaryComponent";
import DepDetail from "../Presentational/DepDetailComponent";
import SalaryDetail from "../Presentational/SalaryDetailComponent";

class Main extends Component {
  constructor(prop) {
    super(prop);
    this.state = {
      staffs: STAFFS,
      departments: DEPARTMENTS,
      basicSalary: 3000000,
      overTimeSalary: 200000,
    };
  }

  render() {
    const StaffWithId = () => {
      const params = useParams();
      return (
        <StaffDetail
          staff={
            this.state.staffs.filter(
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
          staffs={this.state.staffs.filter(
            (staff) => staff.department.id === params.id
          )}
          dep={this.state.departments.filter((dep) => dep.id === params.id)[0]}
        />
      );
    };
    const SalaryWithId = () => {
      const params = useParams();
      return (
        <SalaryDetail
          staff={
            this.state.staffs.filter(
              (staff) => staff.id === parseInt(params.id, 10)
            )[0]
          }
          basicSalary={this.state.basicSalary}
          overTimeSalary={this.state.overTimeSalary}
        />
      );
    };
    return (
      <div>
        <Header />
        <Routes>
          <Route
            path="/staffs"
            element={<StaffList staffs={this.state.staffs} />}
          />
          <Route path="/staffs/:id" element={<StaffWithId />} />
          <Route
            path="/dep"
            element={<Department deps={this.state.departments} />}
          />
          <Route path="/dep/:id" element={<DepDetailWithId />} />
          <Route
            path="/salary"
            element={
              <Salary
                staffs={this.state.staffs}
                basic={this.state.basicSalary}
                overTimeSalary={this.state.overTimeSalary}
              />
            }
          />
          <Route
            path="/salary/:id"
            element={
              <SalaryWithId
                staffs={this.state.staffs}
                basic={this.state.basicSalary}
                overTimeSalary={this.state.overTimeSalary}
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

export default Main;
