import React, { Component } from "react";
import { Button, Card, CardImg, CardTitle } from "reactstrap";
import { Link } from "react-router-dom";
import Search from "./SearchComponent";
import AddNewStaff from "./AddNewStaffComponent";
// import { baseUrl } from "../../shared/baseUrl";
import { Loading } from "./LoadingComponent";
import EditStaff from "./StaffInfomationForm";

class StaffList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchName: "",
    };
    this.getSearchKey = this.getSearchKey.bind(this);
    this.handleDeleteBtn = this.handleDeleteBtn.bind(this);
  }
  getSearchKey = (key) => {
    this.setState({
      searchName: key,
    });
  };
  handleDeleteBtn = (staff) => {
    const isDelete = window.confirm(
      "Xác nhận xóa nhân viên " + staff.name + "?"
    );
    if (isDelete) {
      this.props.deleteStaff(staff.id);
    }
  };
  render() {
    if (this.props.isLoading) {
      return (
        <div className="container">
          <div className="row">
            <Loading />
          </div>
        </div>
      );
    } else if (this.props.errMess) {
      return (
        <div className="container">
          <div className="row">
            <h5>{this.props.errMess}</h5>
          </div>
        </div>
      );
    } else {
      const stafflist = this.props.staffs
        .filter((staff) =>
          staff.name.toLowerCase().includes(this.state.searchName.toLowerCase())
        )
        .map((staff) => {
          return (
            <div key={staff.id} className="col-12 col-md-4 col-lg-2 p-2">
              <Card>
                {" "}
                <Link to={`/staffs/${staff.id}`}>
                  <CardImg src={staff.image} alt={staff.name} />{" "}
                </Link>
                <CardTitle className="text-center">{staff.name}</CardTitle>
                <EditStaff
                  staff={staff}
                  editStaff={this.props.editStaffInfo}
                  staffs={this.props.staffs}
                />
                <Button
                  className="btn btn-danger"
                  onClick={() => this.handleDeleteBtn(staff)}
                >
                  <span className="fa fa-trash"></span>
                  Xóa
                </Button>
              </Card>
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
                postAddNewStaff={this.props.postAddNewStaff}
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
}

export default StaffList;
