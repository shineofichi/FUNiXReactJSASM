import React from "react"
import {Card, CardImg, CardTitle} from "reactstrap";
import {Link} from "react-router-dom"

function StaffList ({staffs}){
    const stafflist = staffs.map((staff) => {
        return (
            <div key={staff.id} className="col-12 col-md-4 col-lg-2 p-2">
                <Link to={`/staffs/${staff.id}`}>
                    <Card>
                        <CardImg src={staff.image} alt={staff.name}/>
                        <CardTitle className="text-center">{staff.name}</CardTitle>
                    </Card>
                </Link>
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