import {Card, CardImg, CardText, CardTitle} from "reactstrap";
import dateFormat from 'dateformat'; 

function StaffDetail(staff){
    if (staff != null){
        return (
            <div className="container">
                <div className="row">
                    <Card>
                        <div className="col-12 col-md-4 col-lg-9 p-1">
                        <CardImg src={staff.image} alt={staff.name}/>
                        </div>
                        <div className="col-12 col-md-8 col-lg-9 p-1">
                            <CardTitle className="">Họ và tên : {staff.name}</CardTitle>
                            <CardText>Ngày sinh: {dateFormat(staff.doB, "dd/mm/yyyy")}</CardText>
                            <CardText>Ngày vào công ty: {dateFormat(staff.startDate, "dd/mm/yyyy")}</CardText>
                            <CardText>Phòng ban: {staff.department.name}</CardText>
                            <CardText>Số ngày nghỉ còn lại: {staff.annualLeave}</CardText>
                            <CardText>Số giờ đã làm thêm: {staff.overTime}</CardText>
                        </div>
                    </Card>
                </div>
            </div>
        )
    }
    else{
        return(
            <div>
                <h1>Vui lòng chọn lại nhân viên.</h1>
            </div>
        )
    }
}
export default StaffDetail;