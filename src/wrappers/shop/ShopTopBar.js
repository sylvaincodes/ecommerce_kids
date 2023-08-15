import React from "react";

const ShopTopBar = () => {
  return (
    <div className="shop-top-area">
        <div className="row">
          <div className="wrapper">
            <select className="shop-select col-12 col-sm-6">
              <option>prix plus elevé - plus bas</option>
              <option>prix plus bas - plus elevé</option>
            </select>


            <div className="shop-tabs col-sm-4 ms-auto">
              <button className="btn active">
                <i className="fa fa-th-large"></i>
              </button>{" "}
              <button className="btn">
                <i className="fa fa-th"></i>
              </button>{" "}
              <button className="btn">
                <i className="fa fa-list-ul"></i>
              </button>
            </div>

            <p className="col-sm-12">affichage de 10 sur 100 résultat(s)</p>

          </div>
        </div>
    </div>
  );
};

export default ShopTopBar;
