import React from "react";
import ShopSearch from "../../components/shop/ShopSearch";
import ShopCategorie from "../../components/shop/ShopCategorie";
import ShopColor from "../../components/shop/ShopColor";
import ShopSize from "../../components/shop/ShopSize";
import ShopTag from "../../components/shop/ShopTag";
import { multilanguage}  from 'redux-multilanguage'

const ShopSidebar = ({strings}) => {
  return (
    <div className="shop-sidebar-area">
      <ShopSearch strings={strings}/>
      <ShopCategorie strings={strings} />
      <ShopColor strings={strings}/>
      <ShopSize strings={strings}/>
      <ShopTag strings={strings}/>
    </div>
  );
};

export default multilanguage(ShopSidebar);

