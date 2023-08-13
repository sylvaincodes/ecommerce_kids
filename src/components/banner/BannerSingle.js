import React from "react";
import { Link } from "react-router-dom";

const BannerSingle = ({ key, data }) => {
  return (
    <div key={key} className="col-12 col-md-4">
      <div className="single-banner">
        <Link to="/" className="img-holder">
          <img src={data.img} className="img-fluid"/>
        </Link>
        <div className="banner-content">
          <h3>{data.title}</h3>
          <h4>
            à partir de <span>{data.price} </span>
          </h4>
          <Link to="/" className="">
            <i className="fa fa-long-arrow-right"></i>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BannerSingle;
