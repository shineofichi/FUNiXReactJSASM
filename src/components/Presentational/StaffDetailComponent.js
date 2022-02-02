import { CardImg, CardText, CardTitle } from "reactstrap";
import BreadcrumbTree from "./BreadcrumbComponent";
import dateFormat from "dateformat";

function StaffDetail({ staff, department }) {
  return (
    <div className="container">
      <BreadcrumbTree
        thispage={staff.name}
        prepage="Nhân viên"
        linktoback="/staffs"
      />
      <div className="row">
        <div className="col-12 col-md-4 col-lg-3 p-1">
          <CardImg src={staff.image} alt={staff.name} />
        </div>
        <div className="col-12 col-md-8 col-lg-9 p-1">
          <CardTitle className="">Họ và tên : {staff.name}</CardTitle>
          <CardText>Ngày sinh: {dateFormat(staff.doB, "dd/mm/yyyy")}</CardText>
          <CardText>
            Ngày vào công ty: {dateFormat(staff.startDate, "dd/mm/yyyy")}
          </CardText>
          <CardText>Phòng ban: {department.name}</CardText>
          <CardText>Số ngày nghỉ còn lại: {staff.annualLeave}</CardText>
          <CardText>Số giờ đã làm thêm: {staff.overTime}</CardText>
        </div>
      </div>
    </div>
  );
}
export default StaffDetail;
