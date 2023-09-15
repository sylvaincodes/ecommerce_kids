import React from "react";
import ShopSearch from "../../components/shop/ShopSearch";
import ShopCategorie from "../../components/shop/ShopCategorie";
import ShopColor from "../../components/shop/ShopColor";
import ShopSize from "../../components/shop/ShopSize";
import ShopTag from "../../components/shop/ShopTag";
import { multilanguage}  from 'redux-multilanguage'

const ShopSidebar = ({strings, setCurrentData, getSortParams}) => {
  return (
    <div className="shop-sidebar-area">
      <ShopSearch strings={strings} setCurrentData={setCurrentData}/>
      <ShopCategorie getSortParams={getSortParams} strings={strings} />
      <ShopColor getSortParams={getSortParams} strings={strings}/>
      <ShopSize getSortParams={getSortParams} strings={strings}/>
      <ShopTag getSortParams={getSortParams} strings={strings}/>
    </div>
  );
};

export default multilanguage(ShopSidebar);

