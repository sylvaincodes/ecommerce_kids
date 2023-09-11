import React from "react";

const TestimonialSingle = ({ key, data }) => {
  return (
    <div key={key} className="col-12 wrapper-content">
      <div>
        <img width={100}  height={100} className="img-fluid" src={data.img} />
      </div>
      <p>{data.text}</p>
      <div className="content">
        <i className="fa fa-map-signs"></i>
        <h5> {data.author}</h5>
        <span> {data.job}</span>
      </div>
    </div>
  );
};

export default TestimonialSingle;
