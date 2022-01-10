import React from "react";
import { Table } from "reactstrap";
import BreadcrumbTree from "./BreadcrumbComponent";
// param: staff, basicSalary, salaryScale;
function SalaryDetail(props) {
  const basicSalary = props.basicSalary * props.staff.salaryScale;
  const overTimeSalary = props.overTimeSalary * props.staff.overTime;
  return (
    <div className="container">
      <BreadcrumbTree
        thispage={props.staff.name}
        prepage="Bảng lương"
        linktoback="/salary"
      />
      <div className="row text-center">
        <h1> Chi tiết bảng lương</h1>
      </div>
      <div className="row">
        <h3>Họ và tên: {props.staff.name}</h3>
        <Table responsive>
          <thead>
            <tr>
              <th>STT</th>
              <th>Danh mục</th>
              <th>Đơn vị</th>
              <th>Hệ số</th>
              <th>Tổng</th>
            </tr>
            <tr>
              <td>1</td>
              <td>Lương tháng</td>
              <td>{props.basicSalary}</td>
              <td>{props.staff.salaryScale}</td>
              <td>{parseInt(basicSalary)}</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Lương làm thêm</td>
              <td>{props.overTimeSalary}</td>
              <td>{props.staff.overTime}</td>
              <td>{parseInt(overTimeSalary)}</td>
            </tr>
            <tr>
              <td> </td>
              <td> </td>
              <td> </td>
              <td> </td>
              <td>{parseInt(overTimeSalary + basicSalary)}</td>
            </tr>
          </thead>
        </Table>
      </div>
    </div>
  );
}
export default SalaryDetail;
