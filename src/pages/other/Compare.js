import React, { Fragment } from "react";
import Layout from "../../layouts/Layout";
import BreadcrumbItem from "../../components/breadcrumb/BreadcrumbItem";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { useState } from "react";
import { multilanguage } from "redux-multilanguage";
import { NumericFormat } from "react-number-format";
import { useSelector,useDispatch } from "react-redux";
import ProductRating from "../../components/sub-componenets/ProductRating";
import { getDiscountPrice } from "../../helpers/product";
import { DELETE_FROM_COMPARE, deleteFromCompare } from "../../redux/actions/compareActions";
import { toast } from "react-hot-toast";

const Compare = ({ strings }) => {
  const currency = useSelector((state) => state.currencyData);
  const compare = useSelector((state) => state.compareData.compareItems);
  const dispatch = useDispatch();

  const handleDeleteFromCompare = (product, toast, strings) => {
    dispatch({
      type: DELETE_FROM_COMPARE,
      payload: {
        product: product
      },
      params: {
        toast: toast,
        strings: strings,
      },
    })
  };

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
                  link="/tous-les-produits"
                  title={strings["shop"]}
                ></BreadcrumbItem>
                <BreadcrumbItem link="#" title="/"></BreadcrumbItem>
                <BreadcrumbItem
                  link="#"
                  title={strings["compare"]}
                ></BreadcrumbItem>
              </ul>
            </div>
          </div>
        </div>

        <div className="compare-main-area pt-90 pb-100">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 overflow-auto">
                <div className="compare-table">
                  <table>
                    <tbody>
                      <tr>
                        <td>{strings["product"]}</td>

                        {compare &&
                          compare.map((item, key) => {
                            return (
                              <Fragment key={key}>
                                <td>
                                  <div className="row p-2">
                                    <i
                                      className="fa fa-trash"
                                      onClick={(e) =>
                                        handleDeleteFromCompare(
                                          item.product,
                                          toast,
                                          strings
                                        )
                                      }
                                    ></i>
                                    <img
                                      src={
                                        process.env.REACT_APP_PUBLIC_URL +
                                        item.product.image[0]
                                      }
                                    />
                                    <h4 className="title">
                                      {item.product.name}
                                    </h4>
                                    <div className="animated-btn btn-hover">
                                      <Link className="rounden-btn" to={"/produit-detail/" + item.product.id + "/" + item.product.slug}>
                                        {strings["add_to_cart"]}
                                      </Link>
                                    </div>
                                  </div>
                                </td>
                              </Fragment>
                            );
                          })}
                      </tr>

                      <tr>
                        <td>{strings["price"]}</td>

                        {compare &&
                          compare.map((item, key) => {
                            let cartTotalItem = 0;

                            const discountedPrice = getDiscountPrice(
                              item.product.price,
                              item.product.discount
                            );
                            const finalProductPrice = (
                              item.product.price * currency.currencyRate
                            ).toFixed(2);
                            const finalDiscountedPrice = (
                              discountedPrice * currency.currencyRate
                            ).toFixed(2);

                            discountedPrice != null
                              ? (cartTotalItem =
                                  finalDiscountedPrice * item.quantity)
                              : (cartTotalItem =
                                  finalProductPrice * item.quantity);

                            return (
                              <Fragment key={key}>
                                <td className="product-price-cart gap-2">
                                  <del className="amount old text-muted justify-content-between">
                                    <NumericFormat
                                      value={finalProductPrice}
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
                                      value={
                                        discountedPrice
                                          ? finalDiscountedPrice
                                          : finalProductPrice
                                      }
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
                              </Fragment>
                            );
                          })}
                      </tr>

                      <tr className="text-center">
                        <td>{strings["rating"]}</td>

                        {compare &&
                          compare.map((item, key) => {
                            return (
                              <Fragment key={key}>
                                <td>
                                  <div className="d-flex justify-content-center gap-2">
                                    <ProductRating ratingValue={4} />
                                  </div>
                                </td>
                              </Fragment>
                            );
                          })}
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
