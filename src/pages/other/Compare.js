import React, { Fragment } from "react";
import Layout from "../../layouts/Layout";
import BreadcrumbItem from "../../components/breadcrumb/BreadcrumbItem";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { useState } from "react";
import { multilanguage } from "redux-multilanguage";
import { NumericFormat } from "react-number-format";
import { useSelector } from "react-redux";
import ButtonStyle from "../../components/sub-componenets/ButtonStyle";
import ProductRating from "../../components/sub-componenets/ProductRating";

const Compare = ({ strings }) => {
  const [quantityCount, setQuantityCount] = useState(1);
  const [productStock, setProductStock] = useState(7);
  const currency = useSelector((state) => state.currencyData);

  return (
    <Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <title> Ecommerce - Liste des comparaisons </title>
        <meta
          name="description"
          content="Page d'affichage des souhaits des articles"
        />
      </Helmet>

      <Layout>
        {/* breadcrumbs */}
        <div className="breadcrumb-area bg-gray-3">
          <div className="container-fluid">
            <div className="row">
              <ul className="breadcrumb">
                <BreadcrumbItem
                  link="/"
                  title={strings["shop"]}
                ></BreadcrumbItem>
                <BreadcrumbItem link="#" title="/"></BreadcrumbItem>
                <BreadcrumbItem
                  link="#"
                  title={strings["whistle"]}
                ></BreadcrumbItem>
              </ul>
            </div>
          </div>
        </div>

        <div className="compare-main-area pt-90 pb-100">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="compare-table">
                  <table>
                    <tbody>
                      
                      <tr>
                        <td>{strings["product"]}</td>
                        <td>
                          <div className="row p-2">
                            <i className="fa fa-trash"></i>
                            <img
                              src={
                                process.env.REACT_APP_PUBLIC_URL +
                                "./assets/img/product/fashion/1.jpg"
                              }
                            />
                            <h4 className="title">jacket kid </h4>
                            <div className="animated-btn btn-hover">
                              <Link className="rounden-btn">
                                {strings["add_to_cart"]}
                              </Link>
                            </div>
                          </div>
                        </td>

                        <td>
                          <div className="row p-2">
                            <i className="fa fa-trash"></i>
                            <img
                              src={
                                process.env.REACT_APP_PUBLIC_URL +
                                "./assets/img/product/fashion/1.jpg"
                              }
                            />
                            <h4 className="title">jacket kid </h4>
                            <div className="animated-btn btn-hover">
                              <Link className="rounden-btn">
                                {strings["add_to_cart"]}
                              </Link>
                            </div>
                          </div>
                        </td>


                      </tr>

                      <tr>
                        <td>{strings["price"]}</td>
                        <td className="product-price-cart gap-2">
                          <del className="amount old text-muted justify-content-between">
                            <NumericFormat
                              value={222}
                              thousandsGroupStyle="lakh"
                              thousandSeparator=" "
                              decimalSeparator="."
                              decimalScale={0}
                              fixedDecimalScale
                              prefix={""}
                              suffix={" " + currency.currencySymbol}
                              displayType="text"
                            />
                          </del>
                          &nbsp;
                          <span className="amount ">
                            <NumericFormat
                              value={222}
                              thousandsGroupStyle="lakh"
                              thousandSeparator=" "
                              decimalSeparator="."
                              decimalScale={0}
                              fixedDecimalScale
                              prefix={""}
                              suffix={" " + currency.currencySymbol}
                              displayType="text"
                            />
                          </span>
                        </td>
                        <td className="product-price-cart gap-2">
                          <del className="amount old text-muted justify-content-between">
                            <NumericFormat
                              value={222}
                              thousandsGroupStyle="lakh"
                              thousandSeparator=" "
                              decimalSeparator="."
                              decimalScale={0}
                              fixedDecimalScale
                              prefix={""}
                              suffix={" " + currency.currencySymbol}
                              displayType="text"
                            />
                          </del>
                          &nbsp;
                          <span className="amount ">
                            <NumericFormat
                              value={222}
                              thousandsGroupStyle="lakh"
                              thousandSeparator=" "
                              decimalSeparator="."
                              decimalScale={0}
                              fixedDecimalScale
                              prefix={""}
                              suffix={" " + currency.currencySymbol}
                              displayType="text"
                            />
                          </span>
                        </td>
                      </tr>

                      <tr>
                        <td>{strings["description"]}</td>

                        <td>
                          <p>
                            Ut enim ad minima veniam, quis nostrum
                            exercitationem ullam corporis suscipit laboriosam,
                            nisi ut aliquid ex ea commodi consequatur? Quis
                            autem vel eum iure reprehenderit qui in ea voluptate
                            velit esse quam nihil molestiae consequatur.
                          </p>
                        </td>
                        
                        <td>
                          <p>
                            Ut enim ad minima veniam, quis nostrum
                            exercitationem ullam corporis suscipit laboriosam,
                            nisi ut aliquid ex ea commodi consequatur? Quis
                            autem vel eum iure reprehenderit qui in ea voluptate
                            velit esse quam nihil molestiae consequatur.
                          </p>
                        </td>
                        
                      </tr>

                      <tr className="text-center">
                        <td>{strings["rating"]}</td>

                        <td>
                          <div className="d-flex justify-content-center gap-2">
                            <ProductRating ratingValue={4} />
                          </div>
                        </td>
                        
                         <td>
                          <div className="d-flex justify-content-center gap-2">
                            <ProductRating ratingValue={4} />
                          </div>
                        </td>
                      </tr>

                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </Fragment>
  );
};

export default multilanguage(Compare);
