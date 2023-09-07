import React, { Fragment, useEffect } from "react";
import Layout from "../../layouts/Layout";
import BreadcrumbItem from "../../components/breadcrumb/BreadcrumbItem";
import { Helmet } from "react-helmet";
import { Link, Navigate, redirect } from "react-router-dom";
import { multilanguage } from "redux-multilanguage";
import ButtonStyle from "../../components/sub-componenets/ButtonStyle";
import { useFormik } from "formik";
import { getToken, setToken } from "../../helpers/auth";
import { useNavigate } from "react-router-dom";
import Paiement from "../../components/auth/Paiement";
import { toast } from "react-hot-toast";

const Login = ({ strings }) => {
  const Navigate = useNavigate();

  const validate = (values) => {
    const errors = {};
    if (!values.password) {
      errors.password = "Cet champ est obligatoire";
    } else if (values.password.length < 8) {
      errors.password = "Au moins 8 caractères";
    }

    if (!values.email) {
      errors.email = "Cet champ est obligatoire";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "adrese email invalide";
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate,
    onSubmit: (values) => {
      setToken(values);
      toast(strings['connected'] , { className:'toast-custom', icon: "👍" });
      window.location.reload();
    },
  });

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
                  <form onSubmit={formik.handleSubmit}>
                    <div className="row mb-3">
                      <h3 className="text-center mb-3 fw-600 text-capitalize">
                        {" "}
                        {strings["login"]}{" "}
                      </h3>
                      <div className="col-12 col-md-6 mb-3">
                        <label>{strings["email"]}</label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          onChange={formik.handleChange}
                          value={formik.values.email}
                        />
                      </div>

                      <div className="col-12 col-md-6 mb-3">
                        <label>{strings["password"]}</label>
                        <input
                          type="password"
                          id="password"
                          name="password"
                          onChange={formik.handleChange}
                          value={formik.values.password}
                        />
                      </div>

                      <ButtonStyle
                        classBtn="btn-style-3 hover-style-2"
                        classCol="col-3"
                        title={strings["continuer"]}
                      />
                    </div>

                    <h5 className="text-center">
                      {strings["go_register_text"]} &nbsp;
                      <button>
                        <Link to="/register">{strings["here"]}</Link>
                      </button>
                    </h5>
                  </form>
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
