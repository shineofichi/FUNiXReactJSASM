import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  NavItem,
  Nav,
} from "reactstrap";
import { NavLink } from "react-router-dom";

function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const onHandleToggle = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div>
      <Navbar dark expand="md">
        <div className="container">
          <NavbarToggler onClick={onHandleToggle}></NavbarToggler>
          <NavbarBrand className="mr-auto" href="/staffs">
            <img
              src="asset/images/logo.png"
              height="30"
              width="41"
              alt="Funix"
            />{" "}
            Ứng dụng quản lý nhân sự
          </NavbarBrand>
          <Collapse isOpen={isNavOpen} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink className="nav-link" to="/staffs">
                  <span className="fa fa-user fa-lg"></span> Nhân viên
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link" to="/dep">
                  <span className="fa fa-users fa-lg"></span> Phòng ban
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link" to="/salary">
                  <span className="fa fa-money fa-lg"></span> Bảng lương
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </div>
      </Navbar>
    </div>
  );
}
export default Header;
