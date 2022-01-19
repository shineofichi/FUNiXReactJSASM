import React from "react";
import BreadcrumbTree from "./BreadcrumbComponent";
import StaffList from "./StaffListComponent";

function DepDetail(props) {
  return (
    <div>
      <div className="container">
        <BreadcrumbTree
          thispage={props.dep.name}
          prepage="Phòng ban"
          linktoback="/dep"
        />
        <div className="row">
          <h1>{props.dep.name}</h1>
        </div>
      </div>
      <StaffList staffs={props.staffs} />
    </div>
  );
}
export default DepDetail;
