import React from "react"
import {Card, CardImg, CardTitle} from "reactstrap";

function StaffList ({staffs}){
    const stafflist = staffs.map((staff) => {
        return (
            <div key={staff.id} className="col-12 col-md-4 col-lg-2 p-2">
                <a href="#show-staff">
                    <Card>
                        <CardImg src={staff.image} alt={staff.name}/>
                        <CardTitle className="text-center">{staff.name}</CardTitle>
                    </Card>
                </a>
            </div>
        )
    });
    return(
        <div className="container">
            <div className="row">
                {stafflist}
            </div>
        </div>
    )
}

export default StaffList;