import React, { Component } from "react";
import { Card, CardImg, CardTitle } from "reactstrap";
import { Link } from "react-router-dom";
import Search from "./SearchComponent";
import AddNewStaff from "./AddNewStaffComponent";
import { baseUrl } from "../../shared/baseUrl";

class StaffList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchName: "",
      newStaff: {},
    };
    this.getSearchKey = this.getSearchKey.bind(this);
    this.getNewStaffInfo = this.getNewStaffInfo.bind(this);
  }
  getSearchKey = (key) => {
    this.setState({
      searchName: key,
    });
  };
  getNewStaffInfo = (info) => {
    this.setState({
      newStaff: info,
    });
  };
  render() {
    const stafflist = this.props.staffs
      .filter((staff) =>
        staff.name.toLowerCase().includes(this.state.searchName.toLowerCase())
      )
      .map((staff) => {
        return (
          <div key={staff.id} className="col-12 col-md-4 col-lg-2 p-2">
            <Link to={`/staffs/${staff.id}`}>
              <Card>
                <CardImg src={baseUrl + staff.image} alt={staff.name} />
                <CardTitle className="text-center">{staff.name}</CardTitle>
              </Card>
            </Link>
          </div>
        );
      });
    return (
      <div className="container">
        <div className="row">
          <h1>Nhân viên</h1>
          <div className="m-auto">
            {" "}
            <AddNewStaff
              staffs={this.props.staffs}
              sendInfo={this.getNewStaffInfo}
            />
          </div>
          <div className="pt-2 ml-auto">
            <Search parentCallback={this.getSearchKey} />
          </div>
        </div>
        <hr></hr>
        <div className="row">{stafflist}</div>
      </div>
    );
  }
}

export default StaffList;
