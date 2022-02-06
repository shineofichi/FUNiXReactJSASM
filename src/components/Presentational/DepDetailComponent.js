import React from "react";
import BreadcrumbTree from "./BreadcrumbComponent";
import { Loading } from "./LoadingComponent";
import StaffList from "./StaffListComponent";

function DepDetail(props) {
  if (props.staffs && props.dep) {
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
  } else {
    return <Loading />;
  }
}
export default DepDetail;
