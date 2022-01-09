import React from "react";
import {Card, CardTitle, CardText} from "reactstrap";

function Department ({deps}){
    const department = deps.map((dep)=>{
        return(
            <div className="col-12 col-md-6 col-lg-4 m-1">
                <Card>
                    <CardTitle>{dep.name}</CardTitle>
                    <CardText>Số lượng nhân viên: {dep.numberOfStaff}</CardText>
                </Card>
            </div>
        )
    });
    return(
        <div className="container">
            <div className="row">
                {department}
            </div>
        </div>
    )
}

export default Department;