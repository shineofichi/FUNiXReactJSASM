import React, {Component} from "react";
import { Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Nav } from 'reactstrap';
import {NavLink} from "react-router-dom"




class Header extends Component{
  constructor(prop){
      super(prop);
      this.state={
          isNavOpen: false,
      }
      this.onHandleToggle = this.onHandleToggle.bind(this)
  }
  onHandleToggle(){
      this.setState({
          isNavOpen : !this.state.isNavOpen
      })
  }
  render() {
      return(
        <div>
          <Navbar dark expand="md" >
                    <div className = "container">
                        <NavbarToggler onClick={this.onHandleToggle}></NavbarToggler>
                        <NavbarBrand className="mr-auto" href = "/">
                            <img src="assets/images/logo.png" height="30" width="41" alt="Funix"/>
                        </NavbarBrand>
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink className="nav-link" to="/staffs"><span className="fa fa-user fa-lg"></span> Nhân viên</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/dep"><span className="fa fa-users fa-lg"></span> Phòng ban</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/salary"><span className="fa fa-money fa-lg"></span> Bảng lương</NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
        </div>
      )
  }
}
export default Header;