import React, {Component} from "react"
import {Card, CardText, CardTitle} from "reactstrap";
import dateFormat from 'dateformat'; 
import ColumForm from "./SelectColumForm"
class StaffList extends Component{
    
    constructor(prop){
        super(prop);
        this.state = {
            selectedStaff : null,
            scaleCols: "7",
        };
        this.onHandleScale = this.onHandleScale.bind(this);
    }
    showColumms(prop) {
        let classStr = "";
        switch(prop){
            default:
            case "7":
                classStr = "col-12 col-md-6 col-lg-4 p-1";
                break;
            case "1":
                classStr = "col-12 col-md-12 col-lg-12 p-1";
                break;
            case "2":
                classStr = "col-6 col-md-6 col-lg-6 p-1";
                break;
            case "3":
                classStr = "col-4 col-md-4 col-lg-4 p-1";
                break;
            case "4":
                classStr = "col-3 col-md-3 col-lg-3 p-1";
                break;
            case "6":
                classStr = "col-2 col-md-2 col-lg-2 p-1";
                break;
        }
        return classStr;
    }
    onHandleScale(event){
        this.setState({scaleCols: event.target.value},
        ()=>this.render)
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
                <div key={staff.id} className={this.showColumms(this.state.scaleCols)}>
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
            <div className="showColumm">
                <form onSubmit={this.preventDefault}>
                    <label>
                        <input 
                            type="radio" 
                            checked = {this.state.scaleCols === "7"}
                            value="7"
                            onChange={this.onHandleScale}
                            /> Tự động
                        </label>
                        <label>
                        <input 
                            type="radio" 
                            checked = {this.state.scaleCols === "1"}
                            value="1"
                            onChange={this.onHandleScale}
                            /> 1 cột
                        </label>
                        <label>
                        <input
                            type="radio" 
                            checked = {this.state.scaleCols === "2"}
                            value="2"
                            onChange={this.onHandleScale}
                            /> 2 cột
                        </label>
                        <label>
                        <input
                            type="radio"
                            checked = {this.state.scaleCols === "3"}
                            value="3"
                            onChange={this.onHandleScale}
                            /> 3 cột
                        </label>
                        <label>
                        <input
                            type="radio"
                            checked = {this.state.scaleCols === "4"}
                            value="4"
                            onChange={this.onHandleScale}
                            /> 4 cột
                        </label>
                        <label>
                        <input
                            type="radio"
                            checked = {this.state.scaleCols === "6"}
                            value="6"
                            onChange={this.onHandleScale}
                            /> 6 cột
                        </label>
                    </form>
                    {/* <ColumForm/> */}
                </div>
                <div className="row" id="show-staff">
                    {this.renderStaff(this.state.selectedStaff)}
                </div>
            </div>
        );
    }
}
export default StaffList;