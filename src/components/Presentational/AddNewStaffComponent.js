import React, { useState } from "react";
import { Button, Modal, ModalBody, ModalHeader } from "reactstrap";
import { defineDep } from "../../function/defineDep";
import StaffInfoLocalForm from "./StaffInfoLocalForm";

function AddNewStaff(props) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const onToggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  // TODO: send the info to parent
  const onHandleAddStaff = (values) => {
    console.log(values);
    onToggleModal();
    const newStaff = {
      id: props.staffs.length,
      name: values.name,
      doB: values.doB,
      salaryScale: values.salaryScale,
      startDate: values.startDate,
      department: defineDep(values.department),
      annualLeave: values.annualLeave,
      overTime: values.overTime,
      image: "/asset/images/alberto.png",
    };
    props.postAddNewStaff(newStaff);
  };

  // Initdial staff object for LocalForm
  const staff = {
    name: "",
    doB: "",
    salaryScale: 1.0,
    startDate: "",
    department: "Finance",
    annualLeave: 0,
    overTime: 0,
  };
  return (
    <div>
      <Button onClick={onToggleModal} color="primary">
        <span className="fa fa-plus"></span>
      </Button>
      <Modal isOpen={isModalOpen}>
        <ModalHeader toggle={onToggleModal}>Thêm nhân viên</ModalHeader>
        <ModalBody>
          <StaffInfoLocalForm
            staff={staff}
            onHandleSubmit={onHandleAddStaff}
          ></StaffInfoLocalForm>
        </ModalBody>
      </Modal>
    </div>
  );
}
export default AddNewStaff;
