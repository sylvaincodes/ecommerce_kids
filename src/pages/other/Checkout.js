import React from "react";
import { Fragment, useState } from "react";
import Layout from "../../layouts/Layout";
import BreadcrumbItem from "../../components/breadcrumb/BreadcrumbItem";
import { Helmet } from "react-helmet";
import LoginModal from "../../components/auth/LoginModal";
import Register from "../../components/auth/Register";
import Adresse from "../../components/auth/Adresse";

const Checkout = () => {
  const [modalLogin, setModalLogin] = useState(false);

  return (
    <Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <title> Ecommerce - Paiement du panier </title>
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
                  title="boutique"
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
                <Register setModalLogin={setModalLogin} />
              </div>
            </div>
          </div>
        </div>

      </Layout>

      <LoginModal show={modalLogin} onHide={() => setModalLogin(false)} />
    </Fragment>
  );
};

export default Checkout;
