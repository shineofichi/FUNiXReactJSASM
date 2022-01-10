import React from "react";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Link } from "react-router-dom";

function BreadcrumbTree(props) {
  const linktoback = props.linktoback;
  const prepage = props.prepage;
  const thispage = props.thispage;
  return (
    <div className="row">
      <Breadcrumb>
        <BreadcrumbItem>
          <Link to={linktoback}>{prepage}</Link>
        </BreadcrumbItem>
        <BreadcrumbItem active>{thispage}</BreadcrumbItem>
      </Breadcrumb>
    </div>
  );
}
export default BreadcrumbTree;
