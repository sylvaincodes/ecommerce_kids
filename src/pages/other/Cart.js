import React from "react";
import { Fragment } from "react";
import Layout from "../../layouts/Layout";
import BreadcrumbItem from "../../components/breadcrumb/BreadcrumbItem";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { useState } from "react";

const Cart = () => {
  const [quantityCount, setQuantityCount] = useState(1);
  const deleteAllFromCart = () => {};

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
                  title="boutique"
                ></BreadcrumbItem>
                <BreadcrumbItem link="#" title="/"></BreadcrumbItem>
                <BreadcrumbItem link="#" title="panier"></BreadcrumbItem>
              </ul>
            </div>
          </div>
        </div>

        <div className="cart-main-area pt-60 pb-60">
          <div className="container">
            <h2 className="title">votre panier</h2>
            <div className="row">
              <div className="col-12">
                <div className="table-content table-responsive cart-table-content">
                  <table>
                    <thead>
                      <tr>
                        <th>Image</th>
                        <th>Produit</th>
                        <th>Prix</th>
                        <th>Qté.</th>
                        <th>Sous-total</th>
                        <th>action</th>
                      </tr>
                    </thead>

                    <tbody>
                      <tr>
                        <td className="product-thumball">
                          <Link to="/">
                            <img
                              className="img-fluid"
                              src="./assets/img/product/fashion/1.jpg"
                              alt="image-cart"
                            />
                          </Link>
                        </td>

                        <td className="product-name">
                          <Link>Consectetur enim id.</Link>
                          <div className="cart-item-variation d-grid">
                            <span>couleur : blanc</span>
                            <span>Taille : X</span>
                          </div>
                        </td>

                        <td className="product-price-cart">
                          <del className="amount old">$220</del>
                          <span className="amount ">$220</span>
                        </td>

                        <td className="product-quantity">
                          <div className="pro-details-quality">
                            <div className="cart-plus-minus">
                              <button className="dec qtybutton">-</button>
                              <input
                                className="cart-plus-minus-box"
                                type="text"
                                value={quantityCount}
                                readOnly
                              />
                              <button className="inc qtybutton">+</button>
                            </div>
                          </div>
                        </td>

                        <td className="product-subtotal">
                          <span>$220</span>
                        </td>

                        <td className="product-remove">
                          <button
                            title="Supprimer"
                            // onClick={() =>
                            //   deleteFromCart(cartItem, addToast)
                            // }
                          >
                            <i className="fa fa-times"></i>
                          </button>
                        </td>
                      </tr>

                      <tr>
                        <td className="product-thumball">
                          <Link to="/">
                            <img
                              className="img-fluid"
                              src="./assets/img/product/fashion/1.jpg"
                              alt="image-cart"
                            />
                          </Link>
                        </td>

                        <td className="product-name">
                          <Link>Consectetur enim id.</Link>
                          <div className="cart-item-variation d-grid">
                            <span>couleur : blanc</span>
                            <span>Taille : X</span>
                          </div>
                        </td>

                        <td className="product-price-cart">
                          <del className="amount old">$220</del>
                          <span className="amount ">$220</span>
                        </td>

                        <td className="product-quantity">
                          <div className="pro-details-quality">
                            <div className="cart-plus-minus">
                              <button className="dec qtybutton">-</button>
                              <input
                                className="cart-plus-minus-box"
                                type="text"
                                value={quantityCount}
                                readOnly
                              />
                              <button className="inc qtybutton">+</button>
                            </div>
                          </div>
                        </td>

                        <td className="product-subtotal">
                          <span>$220</span>
                        </td>

                        <td className="product-remove">
                          <button
                            title="Supprimer"
                            // onClick={() =>
                            //   deleteFromCart(cartItem, addToast)
                            // }
                          >
                            <i className="fa fa-times"></i>
                          </button>
                        </td>
                      </tr>
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
                        process.env.REACT_APP_PUBLIC_URL + "/tous-les-produits"
                      }
                    >
                      continuer les achats
                    </Link>
                  </div>
                  <div className="cart-clear">
                    <button
                      className="hover-style"
                      onClick={() => deleteAllFromCart()}
                    >
                      vider le panier
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-6">
                <div className="cart-widget">
                  <div className="title-wrap">
                    <h4>Coupon code</h4>
                  </div>

                  <div className="content">
                    <p>Entrer votre code coupon ici</p>
                    <form className="" method="post">
                      <input type="text" className="form-control" />

                      <button className="btn-style hover-style-2 text-uppercase text-center">
                        Appliquer coupon
                      </button>
                    </form>
                  </div>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="cart-widget">
                  <div className="title-wrap">
                    <h4>Total panier</h4>
                  </div>

                  <div className="d-grid gap-2">

                    <div className="total-product">

                    <h4>
                      Total produits
                      <span className="c">$ 20</span>
                    </h4>
                    </div>

                    <h3 className="grand-total-title">
                      Grand total
                      <span>$ 20</span>
                    </h3>

                    <Link to={ process.env.REACT_APP_PUBLIC_URL + "checkout" } className="col-8 btn-style hover-style-2 text-uppercase text-center">
                      payer
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

export default Cart;
