import React, {Component} from "react"
import {Card, CardText, CardTitle} from "reactstrap";
import dateFormat from 'dateformat'; 
class StaffList extends Component{
    
    constructor(prop){
        super(prop);
        this.state = {
            selectedStaff : null,
            selectedCols: 3,
        };
    }
    showColumms(prop) {
        var classStr = "";
        switch(prop){
            case 1:
                classStr = "col-12 col-md-12 col-lg-12 p-1";
                return classStr;
            case 2:
                classStr = "col-12 col-md-6 col-lg-6 p-1";
                return classStr;
            case 3:
                classStr = "col-12 col-md-4 col-lg-4 p-1";
                return classStr;
            case 4:
                classStr = "col-12 col-md-3 col-lg-3 p-1";
                return classStr;
            case 6:
                classStr = "col-12 col-md-2 col-lg-2 p-1";
                return classStr;
            default:
                return("col-12 col-md-6 col-lg-4 p-1");
        }

    }
    onStaffSelect(staff){
        this.setState({selectedStaff: staff});
    }
    renderStaff(staff){
        if (staff != null){
            return (
                <div className="col-12 col-md-6 col-lg-4 p-1">
                <Card>
                    <CardTitle className="">Họ và tên : {staff.name}</CardTitle>
                    <CardText>Ngày sinh: {dateFormat(staff.doB, "dd/mm/yyyy")}</CardText>
                    <CardText>Ngày vào công ty: {dateFormat(staff.startDate, "dd/mm/yyyy")}</CardText>
                    <CardText>Phòng ban: {staff.department.name}</CardText>
                    <CardText>Số ngày nghỉ còn lại: {staff.annualLeave}</CardText>
                    <CardText>Số giờ đã làm thêm: {staff.overTime}</CardText>
                </Card>
                </div>
            )
        }
        else{
            return(
                <div>
                    <p>Bấm vào tên nhân viên để xem chi tiết.</p>                    
                </div>
            )
        }
    }
    render(){
        const staffList = this.props.staffs.map((staff) => {
            return (
                <div key={staff.id} className={this.showColumms(this.state.selectedCols)}>
                    <a href="#show-staff">
                        <Card onClick = {() => this.onStaffSelect(staff)}>
                            <CardTitle>{staff.name}</CardTitle>
                        </Card>
                    </a>
                </div>
            )
        });
        return(
            <div className="container">
                <div className="row">
                    {staffList}
                </div>
                <div className="row" id="show-staff">
                    {this.renderStaff(this.state.selectedStaff)}
                </div>
            </div>
        );
    }
}
export default StaffList;