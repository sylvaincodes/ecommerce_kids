import React from "react";
import { getDiscountPrice } from "../../helpers/product";
import ProductSingle from "../../components/product/ProductSingle";

const ShopProduct = ({ layout, products, strings }) => {
  return (
    <div className="shop-product-area product-area">
      <div className="row">
        <div className={`product-list-grid ${layout ? layout : ""} `}>
          {products.length ? (
            products.map((product, i) => {
              const discountedPrice = getDiscountPrice(
                product.price,
                product.discount
              );
              return (
                <ProductSingle
                  strings={strings}
                  key={i}
                  data={product}
                  discountedPrice={discountedPrice}
                  colClass="col-11 col-sm-10 col-md-5 col-lg-5 col-xl-3"
                />
              );
            })
          ) : (
            <div className="d-grid text-center text-muted">
              <span>{strings["no_data"]}</span>
              <img src="./assets/icons/empty-folder.png" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ShopProduct;
