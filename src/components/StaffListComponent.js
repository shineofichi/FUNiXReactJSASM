import React, { useState } from "react";
import {
  Button,
  Card,
  CardImg,
  CardTitle,
  Col,
  Form,
  FormGroup,
  Input,
  Label,
  Modal,
  ModalBody,
  ModalHeader,
} from "reactstrap";
import { Link } from "react-router-dom";

function StaffList({ staffs }) {
  const [searchName, setSearchName] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const OnChangeSearchInput = (event) => {
    event.preventDefault();
    setSearchName(event.target[0].value);
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
        <h1>Nhân viên</h1>
        <Button
          onClick={() => setIsModalOpen(!isModalOpen)}
          color="primary"
          className="m-auto"
        >
          <span className="fa fa-plus"></span>
        </Button>
        <Modal isOpen={isModalOpen}>
          <ModalHeader toggle={() => setIsModalOpen(!isModalOpen)}>
            Thêm nhân viên
          </ModalHeader>
          <ModalBody>
            <Form>
              <FormGroup row>
                <Label htmlFor="name" md={4}>
                  Tên
                </Label>
                <Col md={8}>
                  <Input type="text" id="name" name="name"></Input>{" "}
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label htmlFor="doB" md={4}>
                  Ngày sinh
                </Label>
                <Col md={8}>
                  <Input type="date" id="doB" name="doB"></Input>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label htmlFor="startDate" md={4}>
                  Ngày vào công ty
                </Label>{" "}
                <Col md={8}>
                  <Input type="date" id="startDate" name="startDate"></Input>{" "}
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label htmlFor="department" md={4}>
                  Phòng ban
                </Label>{" "}
                <Col md={8}>
                  <Input type="select" id="department" name="department">
                    <option>Sale</option>
                    <option>HR</option>
                    <option>Marketing</option>
                    <option>IT</option>
                    <option>Finance</option>
                  </Input>{" "}
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label htmlFor="salaryScale" md={4}>
                  Hệ số lương
                </Label>{" "}
                <Col md={8}>
                  <Input
                    type="text"
                    id="salaryScale"
                    name="salaryScale"
                    defaultValue="1"
                  ></Input>{" "}
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label htmlFor="annualLeave" md={4}>
                  Số ngày nghỉ còn lại
                </Label>{" "}
                <Col md={8}>
                  <Input
                    type="text"
                    id="annualLeave"
                    name="annualLeave"
                    defaultValue="0"
                  ></Input>{" "}
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label htmlFor="overTime" md={4}>
                  Số ngày đã làm thêm
                </Label>{" "}
                <Col md={8}>
                  <Input
                    type="text"
                    id="overTime"
                    name="overTime"
                    defaultValue="0"
                  ></Input>{" "}
                </Col>
              </FormGroup>
              <FormGroup>
                <Button
                  type="submit"
                  value="submit"
                  color="primary"
                  className="offset-5"
                >
                  Thêm
                </Button>
              </FormGroup>
            </Form>
          </ModalBody>
        </Modal>
        <Form className="pt-2 ml-auto" inline onSubmit={OnChangeSearchInput}>
          <FormGroup>
            <Label htmlFor="searchtext"></Label>
            <Input
              type="text"
              placeholder="Tìm theo tên nhân viên"
              size="30"
              id="seachtext"
              name="searchtext"
            />
          </FormGroup>
          <FormGroup>
            <Button type="submit" value="submit" color="primary">
              Tìm
            </Button>
          </FormGroup>
        </Form>
      </div>
      <hr></hr>
      <div className="row">{stafflist}</div>
    </div>
  );
}

export default StaffList;
