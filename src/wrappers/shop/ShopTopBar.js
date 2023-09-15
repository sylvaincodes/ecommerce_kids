import React from "react";
import { multilanguage } from "redux-multilanguage";

const ShopTopBar = ({ strings, getFilterSortParams,productshowing ,productCount }) => {
  const handleActiveButton = (e) => {
    const allButtons = document.querySelectorAll(".shop-tabs  .btn");

    allButtons.forEach((element) => {
      element.classList.remove("active");
    });

    e.currentTarget.classList.add("active");
  };

  return (
    <div className="shop-top-area">
      <div className="row">
        <div className="wrapper">
          <select
            className="shop-select col-12 col-sm-6"
            onChange={(e) => getFilterSortParams("filterSort",e.target.value)}
          >
            <option value="default">{strings['choose']}</option>
            <option value="priceHighToLow">{strings["price_max_min"]}</option>
            <option value="priceLowToHigh">{strings["price_min_max"]}</option>
          </select>

          {/* <div className="shop-tabs col-sm-4 ms-auto">
            <button
              className="btn active"
              onClick={(e) => handleActiveButton(e)}
            >
              <i className="fa fa-th-large"></i>
            </button>{" "}
            <button className="btn" onClick={(e) => handleActiveButton(e)}>
              <i className="fa fa-th"></i>
            </button>{" "}
            <button className="btn" onClick={(e) => handleActiveButton(e)}>
              <i className="fa fa-list-ul"></i>
            </button>
          </div> */}

          <p className="col-sm-12">
            {strings["affichage_resultat"]} {productshowing} {strings["on"]} {productCount} {" "}
            {strings["resultat"]}
          </p>
        </div>
      </div>
    </div>
  );
};

export default multilanguage(ShopTopBar);
