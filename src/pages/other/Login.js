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
  return (
    <Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <title> Ecommerce - Login </title>
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
                  title={strings["login"]}
                ></BreadcrumbItem>
              </ul>
            </div>
          </div>
        </div>
        <div className="login-area pt-60 pb-60">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="wrapper">
                  <div className="row mb-3">
                    <h3 className="text-center mb-3 fw-600 text-capitalize">
                      {" "}
                      {strings["login"]}{" "}
                    </h3>
                    <div className="col-12 col-md-6 mb-3">
                      <label>{strings["email"]}</label>
                      <input type="text" />
                    </div>

                    <div className="col-12 col-md-6 mb-3">
                      <label>{strings["password"]}</label>
                      <input type="text" />
                    </div>
                    
                   

                    <ButtonStyle
                      classBtn="btn-style-3 hover-style-2"
                      classCol="col-6"
                      title={strings["continuer"]}
                    />
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
