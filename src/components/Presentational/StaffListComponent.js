import React, { useState } from "react";
import { Button, Card, CardImg, CardTitle } from "reactstrap";
import { Link } from "react-router-dom";
import Search from "./SearchComponent";
import AddNewStaff from "./AddNewStaffComponent";
import { Loading } from "./LoadingComponent";
import EditStaffInfo from "./EditStaffInfo";
import { FadeTransform } from "react-animation-components";

function StaffList(props) {
  const [searchName, setSearchName] = useState("");
  const getSearchKey = (key) => {
    setSearchName(key);
  };
  const handleDeleteBtn = (staff) => {
    const isDelete = window.confirm(
      "Xác nhận xóa nhân viên " + staff.name + "?"
    );
    if (isDelete) {
      props.deleteStaff(staff.id);
    }
  };
  if (props.isLoading) {
    return (
      <div className="container">
        <div className="row">
          <Loading />
        </div>
      </div>
    );
  } else if (props.errMess) {
    return (
      <div className="container">
        <div className="row">
          <h5>{props.errMess}</h5>
        </div>
      </div>
    );
  } else {
    const stafflist = props.staffs
      .filter((staff) =>
        staff.name.toLowerCase().includes(searchName.toLowerCase())
      )
      .map((staff) => {
        return (
          <div key={staff.id} className="col-12 col-md-4 col-lg-2 p-2">
            <FadeTransform
              in
              transformProps={{
                exitTransform: "scale(0.5) translateY(-50%)",
              }}
            >
              <Card>
                {" "}
                <Link to={`/staffs/${staff.id}`}>
                  <CardImg src={staff.image} alt={staff.name} />{" "}
                </Link>
                <CardTitle className="text-center">{staff.name}</CardTitle>
                <EditStaffInfo
                  staff={staff}
                  editStaff={props.editStaffInfo}
                  staffs={props.staffs}
                />
                <Button
                  className="btn btn-danger"
                  onClick={() => handleDeleteBtn(staff)}
                >
                  <span className="fa fa-trash"></span> Xóa
                </Button>
              </Card>
            </FadeTransform>
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
              staffs={props.staffs}
              postAddNewStaff={props.postAddNewStaff}
            />
          </div>
          <div className="pt-2 ml-auto">
            <Search parentCallback={getSearchKey} />
          </div>
        </div>
        <hr></hr>
        <div className="row">{stafflist}</div>
      </div>
    );
  }
}

export default StaffList;
