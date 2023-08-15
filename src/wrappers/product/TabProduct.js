import React, { Fragment, useState } from "react";
import { Tab, Nav } from "react-bootstrap";
import { getDiscountPrice } from "../../helpers/product";
import ProductSingle from "../../components/product/ProductSingle";
import Carousel from 'react-elastic-carousel';

const TabProduct = () => {

    const [width, setWidth] = useState(window.innerWidth);

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
    <Fragment>
      <div className="product-area bg-gray-3">
        <div className="container">
          <div className="wrapper">
            <Tab.Container defaultActiveKey="newarrivals">
              <div className="product-top-bar section-border">
                <div className="section-title">
                  <h3 className="title">produits populaires</h3>
                </div>
                <Nav className="product-list-nav">
                  <Nav.Item>
                    <Nav.Link eventKey="newarrivals">
                      <h6>nouvelles arrivales</h6>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="bestsales">
                      <h6>meilleures ventes</h6>
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
                {/* <div className="d-flex gap-2">
                  <button className="btn btn-outline-secondary ">
                    <i className="pe-7s-angle-left "></i>
                  </button>
                  <button className="btn btn-outline-secondary">
                    <i className="pe-7s-angle-right"></i>
                  </button>
                </div> */}
              </div>

              <Tab.Content>
                <Tab.Pane eventKey="newarrivals">
                  <div className="product-list-grid">

                  <Carousel  itemsToShow={ width < 575 ? 1 : 3 }>
                    {product_tabs.map((product, i) => {
                      const discountedPrice = getDiscountPrice(
                        product.price,
                        product.discount
                      );
                      if (product.collection == "newarrivals") {
                        return (
                          <ProductSingle
                            key={i}
                            data={product}
                            discountedPrice={discountedPrice}
                          />
                        );
                      }
                    })}
                    </Carousel>
                    
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="bestsales">
                  <div className="product-list-grid">

                  <Carousel  itemsToShow={ width < 575 ? 1 : 3 }>
                    {product_tabs.map((product, i) => {
                      const discountedPrice = getDiscountPrice(
                        product.price,
                        product.discount
                      );

                      if (product.collection == "bestsales") {
                        return (
                          <ProductSingle
                            key={i}
                            data={product}
                            discountedPrice={discountedPrice}
                          />
                        );
                      }
                    })}
                    </Carousel>

                  </div>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default TabProduct;
