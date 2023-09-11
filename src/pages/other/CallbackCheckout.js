import React, { Fragment } from "react";
import { multilanguage } from "redux-multilanguage";
import { getOrders } from "../../helpers/auth";
import BreadcrumbItem from "../../components/breadcrumb/BreadcrumbItem";
import Layout from "../../layouts/Layout";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { deleteAllFromCart } from "../../redux/actions/cartActions";
import { toast } from "react-hot-toast";

const CallbackCheckout = ({ strings }) => {

  const dispatch = useDispatch();
  dispatch(deleteAllFromCart(toast, strings));

  const orders = getOrders();

  return (
    <Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <title> {process.env.REACT_APP_SITE_NAME} - Finalisation </title>
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
                <BreadcrumbItem link="#" title="complete"></BreadcrumbItem>
              </ul>
            </div>
          </div>
        </div>

        <div className="checkout-area pt-60 pb-60">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div
                  className="alert alert-success d-flex align-items-center gap-3"
                  role="alert"
                >
                  <span>👍</span>
                  <div>{strings["order_success"]}</div>
                  <Link to="/myaccount">{strings["go_check_recap"]}</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </Fragment>
  );
};

export default multilanguage(CallbackCheckout);
