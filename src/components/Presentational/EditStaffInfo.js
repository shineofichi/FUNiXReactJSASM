import React, { useState } from "react";
import { Button, Modal, ModalBody, ModalHeader } from "reactstrap";
import { defineDep } from "../../function/defineDep";
import StaffInfoLocalForm from "./StaffInfoLocalForm";

function EditStaffInfo(props) {
  // Configure useState Hook for control Modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const onToggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  // TODO: send Staff Information to edit
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

  return (
    <div>
      <Button onClick={onToggleModal} className="btn btn-primary col-12">
        <span className="fa fa-pencil"></span> Sửa
      </Button>
      <Modal isOpen={isModalOpen}>
        <ModalHeader toggle={onToggleModal}>
          Cập nhật thông tin nhân viên
        </ModalHeader>
        <ModalBody>
          <StaffInfoLocalForm
            staff={props.staff}
            onHandleSubmit={onHandleEditStaff}
          ></StaffInfoLocalForm>
        </ModalBody>
      </Modal>
    </div>
  );
}
export default EditStaffInfo;
