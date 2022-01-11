import React, { useState } from "react";
import { Card, CardImg, CardTitle, Form, FormGroup, Input } from "reactstrap";
import { Link } from "react-router-dom";

function StaffList({ staffs }) {
  const [searchName, setSearchName] = useState("");

  const OnChangeSearchInput = (event) => {
    setSearchName(event.currentTarget.value);
  };
  const stafflist = staffs
    .filter((staff) =>
      staff.name.toLowerCase().includes(searchName.toLowerCase())
    )
    .map((staff) => {
      return (
        <div key={staff.id} className="col-12 col-md-4 col-lg-2 p-2">
          <Link to={`/staffs/${staff.id}`}>
            <Card>
              <CardImg src={staff.image} alt={staff.name} />
              <CardTitle className="text-center">{staff.name}</CardTitle>
            </Card>
          </Link>
        </div>
      );
    });
  return (
    <div className="container">
      <div className="row">
        <Form inline>
          <FormGroup>
            <Input
              type="text"
              placeholder="Tìm theo tên nhân viên"
              size="40"
              onChange={OnChangeSearchInput}
            ></Input>
          </FormGroup>
        </Form>
      </div>
      <div className="row">{stafflist}</div>
    </div>
  );
}

export default StaffList;
