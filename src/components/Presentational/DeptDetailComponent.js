import React from "react";
import BreadcrumbTree from "./BreadcrumbComponent";
import { Loading } from "./LoadingComponent";
import StaffList from "./StaffListComponent";

function DeptDetail(props) {
  if (props.staffs && props.department) {
    return (
      <div>
        <div className="container">
          <BreadcrumbTree
            thispage={props.department.name}
            prepage="Phòng ban"
            linktoback="/dep"
          />
          <div className="row">
            <h1>{props.department.name}</h1>
          </div>
        </div>
        <StaffList staffs={props.staffs} />
      </div>
    );
  } else {
    return <Loading />;
  }
}
export default DeptDetail;
