import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const Logo = ({ img }) => {
  return (
    <Fragment>
      <div className="logo">
        <Link to="/">
          <img src={img} width={100} height={100}  alt="logo"/>
        </Link>
      </div>
    </Fragment>
  );
};

export default Logo;
