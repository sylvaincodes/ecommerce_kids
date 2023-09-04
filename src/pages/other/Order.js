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

const Login = ({ strings }) => {
  const currency = useSelector((state) => state.currencyData);

  const handleCanceled = () =>{


  }

  return (
    <Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <title> Ecommerce - mes commande </title>
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
                  link="/myaccount"
                  title={strings["myaccount"]}
                ></BreadcrumbItem>
                <BreadcrumbItem link="#" title="/"></BreadcrumbItem>
                <BreadcrumbItem
                  link="#"
                  title={strings["orders"]}
                ></BreadcrumbItem>
              </ul>
            </div>
          </div>
        </div>

        <div className="orders-area pt-60 pb-60">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="wrapper">
                  <div className="row mb-3">
                    <h3 className="text-center mb-3 fw-600 text-capitalize">
                      {" "}
                      {strings["orders"]}{" "}
                    </h3>

                    <div className="row">
                      <div className="col-lg-12">
                        <div className="order-details-widget">

                            <p> <strong>
                                (1) {strings['order_completed']}
                                &nbsp;
                                </strong> 
                                </p>
                          <div className="card row  ms-3">
                            <div class="card-header">
                              <div className="flex-row justify-content-between">
                                <div className="row">
                                  <span className="text-muted">
                                    {strings['nummber_order']} : D01-3494080-5307813
                                  </span>
                                  <Link
                                    className="text-primary text-capitalize"
                                    to="/"
                                  >
                                    {strings["show_order_detail"]}
                                  </Link>
                                  <Link
                                    className="text-primary text-capitalize"
                                    to="/"
                                  >
                                    {strings["facture"]}
                                  </Link>
                                </div>

                                <div className="row">
                                  <span className="text-muted">
                                    {strings['order_at']} 15 août 2023
                                  </span>

                                  <span>
                                    {strings['total']}  {" "}
                                    <NumericFormat
                                      value="
                                            000
                                            "
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
                                </div>
                              </div>
                            </div>
                            <ul className="list-group list-group-flush">
                              <li className="list-group-item flex-row">
                                <img
                                  width="100px"
                                  src={
                                    process.env.REACT_APP_PUBLIC_URL +
                                    "./assets/img/product/fashion/1.jpg"
                                  }
                                />
                                <div className="flex-column p-3">
                                  <Link
                                    to="/detail-produit/2/jacket-kid"
                                    className="text-primary stretched-link text-capitalize"
                                  >
                                    jacket pro
                                  </Link>
                                  <p className="flex-row gap-2">
                                    <span>
                                      <strong>{strings["couleur"]}</strong> :
                                      blanc
                                    </span>

                                    <span>
                                      <strong>{strings["size"]}</strong> : X
                                    </span>
                                  </p>
                                </div>
                              </li>
                            </ul>

                            <div class="card-footer">
                                <button className="btn btn-primary text-capitalize" onClick={ e => handleCanceled(e) }>
                                       {strings['cancel_order']}
                                </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
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

export default multilanguage(Login);
