import React from "react";
import { Fragment } from "react";
import Layout from "../../layouts/Layout";
import BreadcrumbItem from "../../components/breadcrumb/BreadcrumbItem";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { useState } from "react";
import { multilanguage } from "redux-multilanguage";
import { NumericFormat } from "react-number-format";
import { useSelector } from "react-redux";
import { getDiscountPrice } from "../../helpers/product";
import { useDispatch } from "react-redux";
import {
  addToCart,
  deleteFromCart,
  deleteAllFromCart,
} from "../../redux/actions/cartActions";
import toast from "react-hot-toast";

const Cart = ({ strings }) => {
  const [quantityCount, setQuantityCount] = useState(1);
  const currency = useSelector((state) => state.currencyData);

  const [showEditLink, setShowEditLink] = useState(true);

  const editQuantity = (e) => {
    e.currentTarget.classList.toggle("d-none");
    e.currentTarget.nextSibling.classList.remove("d-none");
  };

  let cartTotalPrice = 0;

  const cart = useSelector((state) => state.cartData.cartItems);

  const dispatch = useDispatch();

  const handleDeleteItem = (product) => {
    dispatch(deleteFromCart(product));
  };

  const handleDeleteAllItem = (toast) => {
    dispatch(deleteAllFromCart(toast, strings));
  };

  const addToCartHandle = (
    product,
    selectedProductColor,
    selectedProductSize,
    toast,
    strings
  ) => {
    dispatch(
      addToCart(
        product,
        quantityCount,
        selectedProductColor,
        selectedProductSize,
        toast,
        strings
      )
    );
  };

  return (
    <Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <title> Ecommerce - Panier </title>
        <meta
          name="description"
          content="Page d'affichage du panier des articles"
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
                  title={strings["cart"]}
                ></BreadcrumbItem>
              </ul>
            </div>
          </div>
        </div>

        <div className="cart-main-area pt-60 pb-60">
          <div className="container">
            <h2 className="title">{strings["your_cart"]}</h2>
            <div className="row">
              <div className="col-12">
                <div className="table-content table-responsive cart-table-content">
                  <table>
                    <thead>
                      <tr>
                        <th>{strings["image"]}</th>
                        <th>{strings["product"]}</th>
                        <th>{strings["price"]}</th>
                        <th>{strings["qte"]}</th>
                        <th>{strings["sous_total"]}</th>
                        <th>{strings["action"]}</th>
                      </tr>
                    </thead>

                    <tbody>
                      {cart &&
                        cart.map((item, key) => {
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

                          discountedPrice != null
                            ? (cartTotalPrice +=
                                finalDiscountedPrice * item.quantity)
                            : (cartTotalPrice +=
                                finalProductPrice * item.quantity);

                          return (
                            <tr>
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
                                    "/produit-detail/" + 1 + "/" + "jacket-kid"
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
                                <div className="pro-details-quality">
                                  <strong>{item.quantity} </strong>
                                </div>
                              </td>

                              <td className="product-subtotal">
                                <span>
                                  <NumericFormat
                                    value={cartTotalItem}
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

                              <td className="product-remove">
                                <button
                                  title="Supprimer"
                                  onClick={(e) =>
                                    handleDeleteItem(item.product)
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
                      onClick={() => handleDeleteAllItem(toast)}
                    >
                      {strings["vider_panier"]}
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-6">
                <div className="cart-widget">
                  <div className="title-wrap">
                    <h4>{strings["coupon_code"]}</h4>
                  </div>

                  <div className="content">
                    <p>{strings["enter_cc"]}</p>
                    <form className="" method="post">
                      <input type="text" className="form-control" />

                      <button className="btn-style hover-style-2 text-uppercase text-center">
                        {strings["apply_coupon"]}
                      </button>
                    </form>
                  </div>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="cart-widget">
                  <div className="title-wrap">
                    <h4> {strings["total_cart"]}</h4>
                  </div>

                  <div className="d-grid gap-2">
                    <div className="total-product">
                      <h4>
                        {strings["total_products"]}
                        <span className="c">
                          <NumericFormat
                            value={cartTotalPrice}
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
                      </h4>
                    </div>

                    <h3 className="grand-total-title">
                      {strings["total_grand"]}
                      <span>
                        <NumericFormat
                          value={cartTotalPrice}
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
                    </h3>

                    <Link
                      to={process.env.REACT_APP_PUBLIC_URL + "checkout"}
                      className="col-8 btn-style hover-style-2 text-uppercase text-center"
                    >
                      {strings["checkout"]}
                    </Link>
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

export default multilanguage(Cart);
