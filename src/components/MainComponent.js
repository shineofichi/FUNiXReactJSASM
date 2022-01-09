import React, {Component} from "react";
import {STAFFS, DEPARTMENTS} from "../shared/staffs";
import StaffList from "./StaffListComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Department from "./DepartmentComponent";
import StaffDetail from "./StaffDetailComponent";
import { Route, Routes, useParams,Navigate } from "react-router-dom";
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
    const StaffWithId = () =>{
      let params = useParams(); 
      return(
        <StaffDetail
          staff={this.state.staffs.filter((staff)=>staff.id === parseInt(params.id,10))[0]}
        />
      )
    }
    return(
      <div>
        <Header/>
        <Routes>
          <Route path="/staffs" element={<StaffList staffs = {this.state.staffs}/>}/>
          <Route path="/staffs/:id" element={<StaffWithId/>}/>
          <Route path="/dep" element={<Department deps={this.state.departments}/>}/>
          <Route path="/salary" element={<Salary staffs={this.state.staffs} basic={this.state.basicSalary} overTimeSalary = {this.state.overTimeSalary} />} />
          <Route path="*" element = {<Navigate to="/staffs"/>}/>
        </Routes>
        
        <Footer/>
      </div>
    );
  }
};

export default Main;
