import React from "react";
import { getDiscountPrice } from "../../helpers/product";
import ProductSingle from "../../components/product/ProductSingle";

const ShopProduct = () => {
  const product_tabs = [
    {
      img: "./assets/img/product/fashion/1.jpg",
      name: "jacket kid",
      price: "1000",
      discount: "0",
      new: true,
      collection: "bestsales",
    },
    {
      img: "./assets/img/product/fashion/2.jpg",
      name: "blazer man",
      price: "2000",
      discount: "10",
      new: false,
      collection: "bestsales",
    },
    {
      img: "./assets/img/product/fashion/3.jpg",
      name: "dress women",
      price: "3000",
      discount: "10",
      new: true,
      collection: "newarrivals",
    },
    {
      img: "./assets/img/product/fashion/4.jpg",
      name: "boy women",
      price: "3500",
      discount: "10",
      new: true,
      collection: "newarrivals",
    },
    {
      img: "./assets/img/product/fashion/5.jpg",
      name: "boy women",
      price: "3500",
      discount: "10",
      new: true,
      collection: "newarrivals",
    },
    {
      img: "./assets/img/product/fashion/6.jpg",
      name: "boy women",
      price: "3500",
      discount: "10",
      new: true,
      collection: "newarrivals",
    },
    {
      img: "./assets/img/product/fashion/7.jpg",
      name: "boy women",
      price: "3500",
      discount: "10",
      new: true,
      collection: "newarrivals",
    },
    ,
    {
      img: "./assets/img/product/fashion/8.jpg",
      name: "boy women",
      price: "3500",
      discount: "10",
      new: true,
      collection: "bestsales",
    },
    ,
    {
      img: "./assets/img/product/fashion/9.jpg",
      name: "boy women",
      price: "3500",
      discount: "10",
      new: true,
      collection: "bestsales",
    },
  ];

  return (
    <div className="shop-product-area product-area">
        <div className="row">
          <div className="product-list-grid">
            {product_tabs.map((product, i) => {
              const discountedPrice = getDiscountPrice(
                product.price,
                product.discount
              );              
                return (
                  <ProductSingle
                    key={i}
                    data={product}
                    discountedPrice={discountedPrice}
                    colClass="col-11 col-sm-10 col-md-5 col-lg-5"
                  />
                );
              
            })}
          </div>
        </div>
    </div>
  );
};

export default ShopProduct;
