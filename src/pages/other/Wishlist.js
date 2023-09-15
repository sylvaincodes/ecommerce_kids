import React, { Fragment } from "react";
import Layout from "../../layouts/Layout";
import BreadcrumbItem from "../../components/breadcrumb/BreadcrumbItem";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { useState } from "react";
import { multilanguage } from "redux-multilanguage";
import { NumericFormat } from "react-number-format";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-hot-toast";
import {
  deleteAllFromWishlist,
  deleteFromWishlist,
} from "../../redux/actions/wishlistActions";
import { getDiscountPrice } from "../../helpers/product";

const Wishlist = ({ strings }) => {
  let wishlistTotalPrice = 0;

  const dispatch = useDispatch();

  const currency = useSelector((state) => state.currencyData);

  const wishlist = useSelector((state) => state.wishlistData.wishlistItems);

  const handleDeleteItem = (product, toast) => {
    dispatch(deleteFromWishlist(product, toast, strings));
  };

  const handleDeleteAllItem = (toast, strings) => {
    dispatch(deleteAllFromWishlist(toast, strings));
  };

  return (
    <Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <title> Ecommerce - Liste des souhaits </title>
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
                  title={strings["wishlist"]}
                ></BreadcrumbItem>
              </ul>
            </div>
          </div>
        </div>

        <div className="cart-main-area pt-60 pb-60">
          <div className="container">
            <h2 className="title">{strings["your_wislist"]}</h2>
            <div className="row">
              <div className="col-12">
                <div className="table-content table-responsive cart-table-content">
                  <table>
                    <thead>
                      <tr>
                        <th>{strings["image"]}</th>
                        <th>{strings["product"]}</th>
                        <th>{strings["price"]}</th>
                        <th>{strings["add_to_cart"]}</th>
                        <th>{strings["action"]}</th>
                      </tr>
                    </thead>

                    <tbody>
                      {wishlist &&
                        wishlist.map((item, key) => {
                          console.log(item.product.image[0]);

                          let wishlistTotalItem = 0;

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
                            ? (wishlistTotalItem =
                                finalDiscountedPrice * item.quantity)
                            : (wishlistTotalItem =
                                finalProductPrice * item.quantity);

                          discountedPrice != null
                            ? (wishlistTotalPrice +=
                                finalDiscountedPrice * item.quantity)
                            : (wishlistTotalPrice +=
                                finalProductPrice * item.quantity);

                          return (
                            <tr key={key}>
                              <td className="product-thumball">
                                <Link to="/">
                                  <img
                                    className="img-fluid"
                                    src={
                                      process.env.REACT_APP_PUBLIC_URL +
                                      item.product.image[0]
                                    }
                                    alt="image-cart"
                                  />
                                </Link>
                              </td>

                              <td className="product-name">
                                <Link
                                  to={
                                    "/produit-detail/" +
                                    item.product.id +
                                    "/" +
                                    item.product.slug
                                  }
                                >
                                  {item.product.name}
                                </Link>
                                <div className="cart-item-variation d-grid">
                                  <span>
                                    {strings["color"]} :{" "}
                                    {item.selectedProductColor}
                                  </span>
                                  <span>
                                    {strings["size"]} :{" "}
                                    {item.selectedProductSize}
                                  </span>
                                </div>
                              </td>

                              <td className="product-price-cart">
                                {item.product.discount != 0 ? (
                                  <del className="amount old">
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
                                ) : (
                                  ""
                                )}
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

                              <td className="product-quantity">
                                <div className="animated-btn btn-hover">
                                  <Link
                                    className="rounded-btn"
                                    to={
                                      "/produit-detail/" +
                                      item.product.id +
                                      "/" +
                                      item.product.slug
                                    }
                                  >
                                    {strings["add_to_cart"]}
                                  </Link>
                                </div>
                              </td>

                              <td className="product-remove">
                                <button
                                  title={strings['delete']}
                                  onClick={() =>
                                    handleDeleteItem(item.product, toast)
                                  }
                                >
                                  <i className="fa fa-times"></i>
                                </button>
                              </td>
                            </tr>
                          );
                        })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-12">
                <div className="cart-shiping-update-wrapper">
                  <div className="cart-shiping-update">
                    <Link
                      className="hover-style"
                      to={
                        process.env.REACT_APP_PUBLIC_URL + "tous-les-produits"
                      }
                    >
                      {strings["continuer_achat"]}
                    </Link>
                  </div>
                  <div className="cart-clear">
                    <button
                      className="hover-style"
                      onClick={() => handleDeleteAllItem(toast,strings)}
                    >
                      {strings["vider_souhait"]}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </Fragment>
  );
};

export default multilanguage(Wishlist);
