import React, { Fragment, useState } from "react";
import { Tab, Nav } from "react-bootstrap";
import { getDiscountPrice } from "../../helpers/product";
import ProductSingle from "../../components/product/ProductSingle";
import Carousel from "react-elastic-carousel";
import { multilanguage } from "redux-multilanguage";

const TabProduct = ({ products,category, strings }) => {
  const [width, setWidth] = useState(window.innerWidth);
  return (
    <Fragment>
      <div className="product-area bg-gray-3">
        <div className="container">
          <div className="wrapper">
            <Tab.Container defaultActiveKey="newarrivals">
              <div className="product-top-bar section-border">
                <div className="section-title">
                  <h3 className="title"> { strings['produits_populaires'] } </h3>
                </div>
                <Nav className="product-list-nav">
                  <Nav.Item>
                    <Nav.Link eventKey="newarrivals">
                      <h6>{ strings['nouvelles_arrivages'] } </h6>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="bestsales">
                      <h6>{ strings['meilleurs_ventes'] } </h6>
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
                    <Carousel itemsToShow={width > 768  ? 3 : 1 }>
                      {products.map((product, i) => {
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
                  <Carousel itemsToShow={width > 768  ? 3 : 1 }>
                      {products.map((product, i) => {
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

export default multilanguage(TabProduct);
