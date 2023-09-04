import React from "react";
import { Fragment, useState } from "react";
import Layout from "../../layouts/Layout";
import BreadcrumbItem from "../../components/breadcrumb/BreadcrumbItem";
import { Helmet } from "react-helmet";
import LoginModal from "../../components/auth/LoginModal";
import Register from "../../components/auth/Register";
import { multilanguage } from 'redux-multilanguage'

const Checkout = ({strings}) => {

  const [modalLogin, setModalLogin] = useState(false);

  return (
    <Fragment>
   
      <Helmet>
        <meta charSet="utf-8" />
        <title> { process.env.REACT_APP_SITE_NAME } - Paiement du panier </title>
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
                  title={strings['shop']}
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
                <Register setModalLogin={setModalLogin} strings={strings} />
              </div>
            </div>
          </div>
        </div>

      </Layout>

      <LoginModal show={modalLogin} onHide={() => setModalLogin(false)} strings={strings} />
    </Fragment>
  );
};

export default multilanguage(Checkout);
