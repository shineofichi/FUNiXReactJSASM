import React, {Component} from "react"
import {Card, CardText, CardTitle} from "reactstrap";
import dateFormat from 'dateformat'; 
class StaffList extends Component{
    
    constructor(prop){
        super(prop);
        this.state = {
            selectedStaff : null,
        };
    }
    
    onStaffSelect(staff){
        this.setState({selectedStaff: staff});
    }
    renderStaff(staff){
        if (staff != null){
            return (
                <div className="col-12 col-md-6 col-lg-4 p-1">
                <Card>
                    <CardTitle>Họ và tên : {staff.name}</CardTitle>
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
                <div key={staff.id} className="col-12 col-md-6 col-lg-4 p-1">
                        <Card onClick = {() => this.onStaffSelect(staff)}>
                            <CardTitle>{staff.name}</CardTitle>
                        </Card>
                </div>
            )
        });
        return(
            <div className="container">
                <div className="row">
                    {staffList}
                </div>
                <div className="row">
                    {this.renderStaff(this.state.selectedStaff)}
                </div>
            </div>
        );
    }
}
export default StaffList;