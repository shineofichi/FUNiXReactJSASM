import React, {Component} from "react";
import {STAFFS, DEPARTMENTS} from "../shared/staffs";
import StaffList from "./StaffListComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Department from "./DepartmentComponent";
import { Route, Routes } from "react-router-dom";
import Salary from "./SalaryComponent";

class Main extends Component {
  constructor(prop){
    super(prop);
    this.state = {
      staffs : STAFFS,
      departments: DEPARTMENTS,
      basicSalary: 3000000,
      overTimeSalary: 200000,
    };
  }

  render(){
    return(
      <div>
        <Header/>
        <Routes>
          <Route path="/home" element={<StaffList staffs = {this.state.staffs}/>}/>
          <Route path="/dep" element={<Department deps={this.state.departments}/>}/>
          <Route path="/salary" element={<Salary staffs={this.state.staffs} basic={this.state.basicSalary} overTimeSalary = {this.state.overTimeSalary} />} />
        </Routes>
        
        <Footer/>
      </div>
    );
  }
};

export default Main;
