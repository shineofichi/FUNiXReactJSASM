import React, { Component } from "react";
import {
  Button,
  Col,
  Form,
  FormGroup,
  Input,
  Label,
  Modal,
  ModalBody,
  ModalHeader,
  FormFeedback,
} from "reactstrap";

class AddNewStaff extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
      id: "",
      name: "",
      doB: "",
      salaryScale: 1,
      startDate: "",
      department: "Finance",
      annualLeave: 0,
      overTime: 0,
      salary: "",
      image: "/assets/images/alberto.png",
      touched: {
        name: false,
        doB: false,
        startDate: false,
      },
      staffs: this.props.staffs,
    };
    this.onToggleModal = this.onToggleModal.bind(this);
  }
  onToggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen,
    });
  }
  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value,
    });
  }
  validate(name, doB, startDate) {
    const errors = {
      name: "",
      doB: "",
      startDate: "",
    };
    const TODAY = new Date();
    if (this.state.touched.name && name.length < 2) {
      errors.name = "Yêu cầu tối thiểu 2 ký tự";
    } else if (this.state.touched.name && name.length > 30) {
      errors.name = "Yêu cầu dưới 30 ký tự";
    }

    if (this.state.touched.doB && doB < TODAY) {
      errors.doB = "Yêu cầu nhập chính xác ngày";
    }
    if (this.state.touched.startDate && startDate < TODAY) {
      errors.startDate = "Yêu cầu nhập chính xác ngày";
    }
    return errors;
  }
  onHandleAddStaff(event) {
    event.preventDefault();
    this.onToggleModal();
    const newStaff = {
      id: this.props.staffs.length,
      name: this.state.name,
      doB: this.state.doB,
      salaryScale: this.state.salaryScale,
      startDate: this.state.startDate,
      department: {
        id: "Dept01",
        name: this.state.department,
        numberOfStaff: 1,
      },
      annualLeave: this.state.annualLeave,
      overTime: this.state.overTime,
      salary: this.state.salary,
      image: this.state.image,
    };
    localStorage.setItem("newStaff", JSON.stringify(newStaff));
    this.state.staffs.push(newStaff);
    localStorage.removeItem("newStaff");
  }
  render() {
    const errors = this.validate(
      this.state.name,
      this.state.doB,
      this.state.startDate
    );
    return (
      <div>
        <Button onClick={this.onToggleModal} color="primary" className="m-auto">
          <span className="fa fa-plus"></span>
        </Button>
        <Modal isOpen={this.state.isModalOpen}>
          <ModalHeader toggle={this.onToggleModal}>Thêm nhân viên</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.onHandleAddStaff}>
              <FormGroup row>
                <Label htmlFor="name" md={4}>
                  Tên
                </Label>
                <Col md={8}>
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    value={this.state.name}
                    invalid={errors.name !== ""}
                    onBlur={this.handleBlur("name")}
                    onChange={this.handleInputChange}
                  />
                  <FormFeedback>{errors.name}</FormFeedback>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label htmlFor="doB" md={4}>
                  Ngày sinh
                </Label>
                <Col md={8}>
                  <Input
                    type="date"
                    id="doB"
                    name="doB"
                    pattern="\d{2}-\d{2}-d{4}"
                    value={this.state.doB}
                    invalid={errors.doB !== ""}
                    onBlur={this.handleBlur("doB")}
                    onChange={this.handleInputChange}
                  />
                  <FormFeedback>{errors.doB}</FormFeedback>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label htmlFor="startDate" md={4}>
                  Ngày vào công ty
                </Label>{" "}
                <Col md={8}>
                  <Input
                    type="date"
                    id="startDate"
                    name="startDate"
                    value={this.state.startDate}
                    invalid={errors.startDate !== ""}
                    onBlur={this.handleBlur("startDate")}
                    onChange={this.handleInputChange}
                  />
                  <FormFeedback>{errors.startDate}</FormFeedback>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label htmlFor="department" md={4}>
                  Phòng ban
                </Label>{" "}
                <Col md={8}>
                  <Input
                    type="select"
                    id="department"
                    name="department"
                    onChange={this.handleInputChange}
                    value={this.state.department}
                  >
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
                </Label>
                <Col md={8}>
                  <Input
                    type="text"
                    id="salaryScale"
                    name="salaryScale"
                    defaultValue={this.state.salaryScale}
                  ></Input>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label htmlFor="annualLeave" md={4}>
                  Số ngày nghỉ còn lại
                </Label>
                <Col md={8}>
                  <Input
                    type="text"
                    id="annualLeave"
                    name="annualLeave"
                    defaultValue={this.state.annualLeave}
                  ></Input>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label htmlFor="overTime" md={4}>
                  Số ngày đã làm thêm
                </Label>
                <Col md={8}>
                  <Input
                    type="text"
                    id="overTime"
                    name="overTime"
                    defaultValue={this.state.overTime}
                  ></Input>
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
      </div>
    );
  }
}
export default AddNewStaff;
