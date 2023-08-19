import React from "react";
import { getDiscountPrice } from "../../helpers/product";
import ProductSingle from "../../components/product/ProductSingle";

const ShopProduct = ({ layout, products }) => {
  return (
    <div className="shop-product-area product-area">
      <div className="row">
        <div className={`product-list-grid ${layout ? layout : ""} `}>
          {products.map((product, i) => {
            const discountedPrice = getDiscountPrice(
              product.price,
              product.discount
            );
            return (
              <ProductSingle
                key={i}
                data={product}
                discountedPrice={discountedPrice}
                colClass="col-11 col-sm-10 col-md-5 col-lg-5 col-xl-3"
              />
              
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ShopProduct;
