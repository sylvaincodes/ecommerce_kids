import React from "react";
import ProductGridSingle from "../../components/product/ProductGridSingle";
import { getDiscountPrice } from "../../helpers/product";
import { useSelector } from "react-redux";
import { multilanguage } from 'redux-multilanguage'

const ProductGrid = ({ category, limit, sliderClassName,strings }) => {
  const nbreProducts = useSelector((state) =>
    state.productData.products.slice(0, limit ? limit : products.length)
  );

  const products = nbreProducts.filter(
    (product) => (product.category = category)
  );


  return (
    <div className="swiper-wrapper">
      {products &&
        products.map((product) => {
          const discountedPrice = getDiscountPrice(
            product.price,
            product.discount
          );

          return (
            <ProductGridSingle
              strings={strings}
              sliderClassName={sliderClassName}
              product={product}
              key={product.id}
              />
          );
        })}
    </div>
  );
};

export default multilanguage(ProductGrid);
