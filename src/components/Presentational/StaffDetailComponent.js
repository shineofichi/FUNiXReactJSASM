import { CardImg, CardText, CardTitle } from "reactstrap";
import BreadcrumbTree from "./BreadcrumbComponent";
import dateFormat from "dateformat";
import { Loading } from "./LoadingComponent";
import { Fade } from "react-animation-components";
function StaffDetail(props) {
  if (props.staff && !props.departments.isDeptLoading) {
    const department = props.departments.departments.filter(
      (dept) => dept.id === props.staff.departmentId
    )[0];
    return (
      <div className="container">
        <BreadcrumbTree
          thispage={props.staff.name}
          prepage="Nhân viên"
          linktoback="/staffs"
        />
        <div className="row">
          <div className="col-12 col-md-4 col-lg-3 p-1">
            <CardImg src={props.staff.image} alt={props.staff.name} />
          </div>
          <div className="col-12 col-md-8 col-lg-9 p-1">
            <Fade in>
              <CardTitle className="">Họ và tên : {props.staff.name}</CardTitle>
              <CardText>
                Ngày sinh: {dateFormat(props.staff.doB, "dd/mm/yyyy")}
              </CardText>
              <CardText>
                Ngày vào công ty:{" "}
                {dateFormat(props.staff.startDate, "dd/mm/yyyy")}
              </CardText>
              <CardText>Phòng ban: {department.name}</CardText>
              <CardText>
                Số ngày nghỉ còn lại: {props.staff.annualLeave}
              </CardText>
              <CardText>Số giờ đã làm thêm: {props.staff.overTime}</CardText>
            </Fade>
          </div>
        </div>
      </div>
    );
  } else {
    return <Loading />;
  }
}
export default StaffDetail;
