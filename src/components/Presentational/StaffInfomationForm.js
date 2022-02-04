/* eslint-disable react/jsx-pascal-case */
import React, { useState } from "react";
import {
  Button,
  Col,
  Label,
  Modal,
  ModalBody,
  ModalHeader,
  Row,
} from "reactstrap";
import { LocalForm, Control, Errors } from "react-redux-form";
import dateFormat from "dateformat";

// Validate condition
const required = (val) => val && val.length;
const maxLength = (len) => (val) => !val || val.length <= len;
const minLength = (len) => (val) => val && val.length >= len;
const isNumber = (val) => !isNaN(Number(val));

function EditStaff(props) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const onToggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  const onHandleEditStaff = (values) => {
    onToggleModal();
    const staff = {
      id: props.staff.id,
      name: values.name,
      doB: values.doB,
      salaryScale: values.salaryScale,
      startDate: values.startDate,
      department: defineDep(values.department),
      annualLeave: values.annualLeave,
      overTime: values.overTime,
      image: "/asset/images/alberto.png",
    };
    props.editStaff(staff);
  };

  // TODO: define the Department object
  // @param: department's name
  const defineDep = (depname) => {
    switch (depname) {
      case "Sale":
        return {
          id: "Dept01",
          name: depname,
          numberOfStaff: "",
        };
      case "HR":
        return {
          id: "Dept02",
          name: depname,
          numberOfStaff: "",
        };
      case "Marketing":
        return {
          id: "Dept03",
          name: depname,
          numberOfStaff: "",
        };
      case "IT":
        return {
          id: "Dept04",
          name: depname,
          numberOfStaff: "",
        };
      default:
      case "Finance":
        return {
          id: "Dept05",
          name: depname,
          numberOfStaff: "",
        };
    }
  };
  return (
    <div>
      <Button onClick={onToggleModal} className="btn btn-primary col-12">
        <span className="fa fa-pencil"></span> Sửa
      </Button>
      <Modal isOpen={isModalOpen}>
        <ModalHeader toggle={onToggleModal}>
          Cập nhật thông tin nhân viên
        </ModalHeader>
        <ModalBody>
          <LocalForm onSubmit={(values) => onHandleEditStaff(values)}>
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
                  validators={{
                    minLength: minLength(2),
                    maxLength: maxLength(30),
                  }}
                  defaultValue={props.staff.name}
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
                  defaultValue={dateFormat(props.staff.doB, "yyyy-mm-dd")}
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
                  defaultValue={dateFormat(props.staff.startDate, "yyyy-mm-dd")}
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
                  defaultValue="Finance"
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
                  defaultValue={props.staff.salaryScale}
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
                  validators={{
                    isNumber,
                  }}
                  defaultValue={props.staff.annualLeave}
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
                  validators={{
                    isNumber,
                  }}
                  defaultValue={props.staff.overTime}
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
                Cập nhật
              </Button>
            </Row>
          </LocalForm>
        </ModalBody>
      </Modal>
    </div>
  );
}
export default EditStaff;