import React, {Component} from "react"
import {Card, CardTitle} from "reactstrap";
class StaffList extends Component{
    
    constructor(prop){
        super(prop);
        this.state = {
            selectedStaff : null,
        };
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
            </div>
        );
    }
}
export default StaffList;