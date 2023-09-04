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

const Myaccount = ({ strings }) => {
  return (
    <Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <title> Ecommerce - Myaccount </title>
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
                  link="/"
                  title={strings["home"]}
                ></BreadcrumbItem>
                <BreadcrumbItem link="#" title="/"></BreadcrumbItem>
                <BreadcrumbItem
                  link="#"
                  title={strings["myaccount"]}
                ></BreadcrumbItem>
              </ul>
            </div>
          </div>
        </div>

        <div className="myaccount-area pt-60 pb-60">
          <div className="container">
            <div className="row mb-3">
              <h3 className="text-center mb-3 fw-600 text-capitalize">
                {" "}
                {strings["myaccount"]}{" "}
              </h3>

              <div className="group-list d-flex">
                <div class="list-item flex-row col-12 col-md-5">
                  <Link to="/account/order">
                    <img
                      width={100}
                      src={
                        process.env.REACT_APP_PUBLIC_URL +
                        "./assets/img/moncompte/order.png"
                      }
                      class="img-fluid"
                      alt="..."
                    />
                  </Link>
                  <div class="card-body">
                    <Link to="/account/order">
                      <h5 class="card-title">{strings["orders"]}</h5>
                      <p class="card-text">{strings["orders_desc"]}</p>
                    </Link>
                  </div>
                </div>

                <div class="list-item flex-row col-12 col-md-5">
                  <Link to="/account/order">
                    <img
                      width={100}
                      src={
                        process.env.REACT_APP_PUBLIC_URL +
                        "./assets/img/moncompte/payment.png"
                      }
                      class="img-fluid"
                      alt="..."
                    />
                  </Link>

                  <div class="card-body">
                    <Link to="/account/payment">
                      <h5 class="card-title">{strings["payments"]}</h5>
                      <p class="card-text">{strings["payments_desc"]}</p>
                    </Link>
                  </div>
                </div>

                <div class="list-item flex-row col-12 col-md-5">
                  <Link to="/account/order">
                    <img
                      width={100}
                      src={
                        process.env.REACT_APP_PUBLIC_URL +
                        "./assets/img/moncompte/order.png"
                      }
                      class="img-fluid"
                      alt="..."
                    />
                  </Link>
                  <div class="card-body">
                    <Link to="/account/adresse">
                      <h5 class="card-title">{strings["adresse"]}</h5>
                      <p class="card-text">{strings["adresse_desc"]}</p>
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

export default multilanguage(Myaccount);
