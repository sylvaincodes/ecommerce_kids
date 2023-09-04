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

const Wishlist = ({ strings }) => {

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
                        <th>{strings["add_to_cart"]}</th>
                        <th>{strings["action"]}</th>
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
                          <Link
                            to={"/produit-detail/" + 1 + "/" + "jacket-kid"}
                          >
                            Consectetur enim id.
                          </Link>
                         
                        </td>

                        <td className="product-price-cart">
                          <del className="amount old">
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

                        <td className="product-quantity">
                            <div className="animated-btn btn-hover">
                                <Link className="rounded-btn" to="/product-detail/1/jacket-kid">
                                   { strings['add_to_cart']}
                                </Link>
                            </div>
                        </td>

                      

                        <td className="product-remove">
                          <button
                            title="Supprimer"
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
                        process.env.REACT_APP_PUBLIC_URL + "tous-les-produits"
                      }
                    >
                      {strings["continuer_achat"]}
                    </Link>
                  </div>
                  <div className="cart-clear">
                    <button
                      className="hover-style"
                    >
                      {strings["vider_panier"]}
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
