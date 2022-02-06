import React from "react";
import { Link } from "react-router-dom";
import { Card, CardTitle, CardText } from "reactstrap";
import { FadeTransform } from "react-animation-components";

function Department({ deps }) {
  const department = deps.map((dep) => {
    return (
      <div key={dep.id} className="col-12 col-md-6 col-lg-4 p-1">
        <Link to={`/dep/${dep.id}`}>
          <FadeTransform
            in
            transformProps={{
              exitTransform: "scale(0.5) translateY(-50%)",
            }}
          >
            <Card>
              <CardTitle>{dep.name}</CardTitle>
              <CardText>Số lượng nhân viên: {dep.numberOfStaff}</CardText>
            </Card>
          </FadeTransform>
        </Link>
      </div>
    );
  });
  return (
    <div className="container">
      <div className="row">{department}</div>
    </div>
  );
}

export default Department;
