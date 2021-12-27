// import logo from './logo.svg';
// import './App.css';
import {Navbar , NavbarBrand} from "reactstrap"; 
import React, {Component} from "react";
import {STAFFS, DEPARTMENTS} from "./shared/staffs";
import StaffList from "./components/StaffList";

class App extends Component {
  constructor(prop){
    super(prop);
    this.state = {
      staffs : STAFFS,
      departments : DEPARTMENTS.name,
    };
  }
  render(){
    return(
      <div>
      <Navbar dark color = "primary">
        <div className = "container">
          <NavbarBrand href = "/">
            Ứng dụng quản lý nhân sự v1.0
          </NavbarBrand>
        </div>
      </Navbar>
      <StaffList staffs = {this.state.staffs}/>
      </div>
    );
  }
};

export default App;
