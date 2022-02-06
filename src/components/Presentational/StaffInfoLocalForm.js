/* eslint-disable react/jsx-pascal-case */
import React from "react";
import { Button, Col, Label, Row } from "reactstrap";
import { LocalForm, Control, Errors } from "react-redux-form";
import dateFormat from "dateformat";
// Validate condition
const required = (val) => val && val.length;
const maxLength = (len) => (val) => !val || val.length <= len;
const minLength = (len) => (val) => val && val.length >= len;
const isNumber = (val) => !isNaN(Number(val));

function StaffInfoLocalForm(props) {
  const staff = props.staff;
  return (
    <LocalForm onSubmit={(values) => props.onHandleSubmit(values)}>
      <Row className="form-group">
        <Label htmlFor="name" md={4}>
          Tên
        </Label>
        <Col md={8}>
          <Control.text
            model=".name"
            id="name"
            name="name"
            className="form-control"
            defaultValue={staff.name}
            validators={{
              minLength: minLength(2),
              maxLength: maxLength(30),
            }}
          />
          <Errors
            className="text-danger"
            model=".name"
            show="touched"
            messages={{
              minLength: "Yêu cầu nhập từ 2 kí tự trở lên ",
              maxLength: "Yêu cầu nhập tối đa 30 kí tự",
            }}
          />
        </Col>
      </Row>
      <Row className="form-group">
        <Label htmlFor="doB" md={4}>
          Ngày sinh
        </Label>
        <Col md={8}>
          <Control
            type="date"
            model=".doB"
            id="doB"
            name="doB"
            pattern="\d{2}-\d{2}-d{4}"
            className="form-control"
            defaultValue={dateFormat(staff.doB, "yyyy-mm-dd")}
            validators={{
              required,
            }}
          />
          <Errors
            className="text-danger"
            model=".doB"
            show="touched"
            messages={{
              required: "Yêu cầu nhập ",
            }}
          />
        </Col>
      </Row>
      <Row className="form-group">
        <Label htmlFor="startDate" md={4}>
          Ngày vào công ty
        </Label>{" "}
        <Col md={8}>
          <Control
            type="date"
            model=".startDate"
            id="startDate"
            name="startDate"
            pattern="\d{2}-\d{2}-d{4}"
            className="form-control"
            defaultValue={dateFormat(staff.startDate, "yyyy-mm-dd")}
            validators={{
              required,
            }}
          />
          <Errors
            className="text-danger"
            model=".startDate"
            show="touched"
            messages={{
              required: "Yêu cầu nhập ",
            }}
          />
        </Col>
      </Row>
      <Row className="form-group">
        <Label htmlFor="department" md={4}>
          Phòng ban
        </Label>{" "}
        <Col md={8}>
          <Control.select
            model=".department"
            id="department"
            name="department"
            defaultValue={staff.department}
          >
            <option>Sale</option>
            <option>HR</option>
            <option>Marketing</option>
            <option>IT</option>
            <option>Finance</option>
          </Control.select>{" "}
        </Col>
      </Row>
      <Row className="form-group">
        <Label htmlFor="salaryScale" md={4}>
          Hệ số lương
        </Label>
        <Col md={8}>
          <Control.text
            model=".salaryScale"
            id="salaryScale"
            name="salaryScale"
            className="form-control"
            validators={{
              isNumber,
            }}
            defaultValue={staff.salaryScale}
          />
          <Errors
            className="text-danger"
            model=".salaryScale"
            show="touched"
            messages={{
              isNumber: "Yêu cầu nhập số ",
            }}
          />
        </Col>
      </Row>
      <Row className="form-group">
        <Label htmlFor="annualLeave" md={4}>
          Số ngày nghỉ còn lại
        </Label>
        <Col md={8}>
          <Control.text
            model=".annualLeave"
            id="annualLeave"
            name="annualLeave"
            className="form-control"
            defaultValue={staff.annualLeave}
            validators={{
              isNumber,
            }}
          />
          <Errors
            className="text-danger"
            model=".annualLeave"
            show="touched"
            messages={{
              isNumber: "Yêu cầu nhập số ",
            }}
          />
        </Col>
      </Row>
      <Row className="form-group">
        <Label htmlFor="overTime" md={4}>
          Số ngày đã làm thêm
        </Label>
        <Col md={8}>
          <Control.text
            model=".overTime"
            id="overTime"
            name="overTime"
            className="form-control"
            defaultValue={staff.overTime}
            validators={{
              isNumber,
            }}
          />
          <Errors
            className="text-danger"
            model=".overTime"
            show="touched"
            messages={{
              isNumber: "Yêu cầu nhập số ",
            }}
          />
        </Col>
      </Row>
      <Row className="form-group">
        <Button
          type="submit"
          value="submit"
          color="primary"
          className="offset-5 mt-2"
        >
          Thêm
        </Button>
      </Row>
    </LocalForm>
  );
}
export default StaffInfoLocalForm;
