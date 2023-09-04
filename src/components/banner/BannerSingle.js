import React from "react";
import { Link } from "react-router-dom";
import { NumericFormat } from "react-number-format";
import { useSelector } from 'react-redux'

const BannerSingle = ({ i, data, strings }) => {

  const currency = useSelector((state) => state.currencyData);

  return (
    <div key={i} className="col-12 col-md-4">
      <div className="single-banner">
        <Link to="/" className="img-holder">
          <img src={data.img} className="img-fluid" />
        </Link>
        <div className="banner-content">
          <h3>{data.title}</h3>
          <h4>
            {strings["a_partir_de"]}
            <span>
              {" "}
              <NumericFormat
                value={data.price}
                thousandsGroupStyle="lakh"
                thousandSeparator=" "
                decimalSeparator ="."
                decimalScale={0} 
                fixedDecimalScale
                prefix={''} 
                suffix={ " " + currency.currencySymbol } 
                displayType="text"
              />{" "}
            </span>
          </h4>
          <Link to="/tous-les-produits">
            <i className="fa fa-long-arrow-right"></i>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BannerSingle;
