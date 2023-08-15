import React from "react";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import { Link } from "react-router-dom";

const BreadcrumbItem = ({
  title, link
}) => {
  return (
    <>
      <li>
        <Link to={link}>{title}</Link>
      </li>
    </>
  );
};

export default BreadcrumbItem;
