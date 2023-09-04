import React from "react";
import {multilanguage} from 'redux-multilanguage'

const ShopSearch = ({strings}) => {
  return (
    <div className="sidebar-widget">
      <h4 className="title">{strings['recherche']}</h4>
      <div className="sidebar-search">
          <form className="sidebar-search-form">
              <input placeholder={strings['recherche_ici']} type="text"/>
              <button className="btn">
                  <i className="fa fa-search"></i>
              </button>
          </form>
      </div>
    </div>
  )
};

export default multilanguage(ShopSearch);
