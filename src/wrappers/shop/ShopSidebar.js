import React from "react";
import ShopSearch from "../../components/shop/ShopSearch";
import ShopCategorie from "../../components/shop/ShopCategorie";
import ShopColor from "../../components/shop/ShopColor";
import ShopSize from "../../components/shop/ShopSize";
import ShopTag from "../../components/shop/ShopTag";

const ShopSidebar = () => {
  return (
    <div className="shop-sidebar-area">
      <ShopSearch />
      <ShopCategorie />
      <ShopColor />
      <ShopSize/>
      <ShopTag/>
    </div>
  );
};

export default ShopSidebar;
