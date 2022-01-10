import React from "react";
import { Card, CardBody, CardFooter, CardText, CardTitle } from "reactstrap";

function Salary(props) {
  const staff = props.staffs.map((staff) => {
    const salary =
      props.basic * staff.salaryScale + staff.overTime * props.overTimeSalary;
    return (
      <div key={staff.id} className="col-12 col-md-6 col-lg-4 p-1">
        <Card>
          <CardTitle>{staff.name}</CardTitle>
          <CardBody>
            <CardText>Mã nhân viên: {staff.id}</CardText>
            <CardText>Hệ số lương: {staff.salaryScale}</CardText>
            <CardText>Số giờ làm thêm: {staff.overTime}</CardText>
          </CardBody>
          <CardFooter>Lương: {parseInt(salary)}</CardFooter>
        </Card>
      </div>
    );
  });
  return (
    <div className="container">
      <div className="row">{staff}</div>
    </div>
  );
}
export default Salary;
