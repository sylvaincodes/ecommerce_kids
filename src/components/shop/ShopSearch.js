import React from "react";

const ShopSearch = () => {
  return (
    <div className="sidebar-widget">
      <h4 className="title">recherche</h4>
      <div className="sidebar-search">
          <form className="sidebar-search-form">
              <input placeholder="rechercher ici" type="text"/>
              <button className="btn">
                  <i className="fa fa-search"></i>
              </button>
          </form>
      </div>
    </div>
  )
};

export default ShopSearch;
