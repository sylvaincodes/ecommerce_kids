import React, { useEffect } from "react";
import { Fragment, useState } from "react";
import Layout from "../../layouts/Layout";
import BreadcrumbItem from "../../components/breadcrumb/BreadcrumbItem";
import { Helmet } from "react-helmet";
import LoginModal from "../../components/auth/LoginModal";
import { multilanguage } from "redux-multilanguage";
import { getToken, getUserAdresse } from "../../helpers/auth";
import Login from "./Login";
import Adresse from "../../components/auth/Adresse";
import Paiement from "../../components/auth/Paiement";

const Checkout = ({ strings }) => {
  const [modalLogin, setModalLogin] = useState(false);

  const token = getToken();
  console.log(token);

  if (!token) {
    return <Login />;
  }

  return (
    <Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <title> {process.env.REACT_APP_SITE_NAME} - Paiement du panier </title>
        <meta
          name="description"
          content="Page d'affichage du panier des articles"
        />
      </Helmet>

      <Layout>
        <div className="breadcrumb-area bg-gray-3">
          <div className="container-fluid">
            <div className="row">
              <ul className="breadcrumb">
                <BreadcrumbItem
                  link="/tous-les-produits"
                  title={strings["shop"]}
                ></BreadcrumbItem>
                <BreadcrumbItem link="#" title="/"></BreadcrumbItem>
                <BreadcrumbItem link="#" title="paiement"></BreadcrumbItem>
              </ul>
            </div>
          </div>
        </div>

        <div className="checkout-area pt-60 pb-60">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                 {
                  getUserAdresse() ?
                  <Paiement/>
                  :
                 <Adresse/>
                 } 
              </div>
            </div>
          </div>
        </div>

      </Layout>

      <LoginModal
        show={modalLogin}
        onHide={() => setModalLogin(false)}
        strings={strings}
      />
    </Fragment>
  );
};

export default multilanguage(Checkout);
