import React, { Fragment } from "react";
import { useFormik } from "formik";
import { getToken, setToken } from "../../helpers/auth";
import Layout from "../../layouts/Layout";
import BreadcrumbItem from "../../components/breadcrumb/BreadcrumbItem";
import { Helmet } from "react-helmet";
import { multilanguage } from "redux-multilanguage";
import { Link, useNavigate } from "react-router-dom";
import Myaccount from "../../pages/other/Myaccount";

function Register({ setModalLogin, strings }) {
  const Navigate = useNavigate();

  const validate = (values) => {
    const errors = {};
    if (!values.password) {
      errors.password = strings['required'];
    } else if (values.password.length < 8) {
      errors.password = strings['at_least_8_strings'];
    }

    if (values.c_password != values.password) {
      errors.c_password = strings['passwords_not_confirmed'];
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
      c_password: "",
    },
    validate,
    onSubmit: (values) => {
      setToken(values);
      Navigate("/checkout");
    },
  });

  if (getToken()) {
    return <Myaccount />;
  }

  return (
    <Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <title> Ecommerce - s'inscrire </title>
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
                  title={strings["signup"]}
                ></BreadcrumbItem>
              </ul>
            </div>
          </div>
        </div>

        <div className="login-area-wrapper pt-60 pb-60">
          <div className="container">
            <h4 className="pb-20 text-capitalise">{strings["creer_compte"]}</h4>
            <form onSubmit={formik.handleSubmit}>
              <div className="row mb-6">
                <div className="col-12 col-md-6 mb-3">
                  <label>{strings["email"]}</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                  />
                  {formik.errors.email ? (
                    <div className="invalid-feedback d-block">
                      {" "}
                      {formik.errors.email}{" "}
                    </div>
                  ) : null}
                </div>

                <div className="col-12 col-md-6 mb-3">
                  <label>{strings["password"]}</label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    onChange={formik.handleChange}
                    value={formik.values.password}
                  />
                  {formik.errors.password ? (
                    <div className="invalid-feedback d-block">
                      {" "}
                      {formik.errors.password}{" "}
                    </div>
                  ) : null}
                </div>
              </div>

              <div className="row mb-3">
                <div className="col-12 col-md-6">
                  <label>{strings["confirm_password"]}</label>
                  <input
                    id="c_password"
                    name="c_password"
                    type="c_password"
                    onChange={formik.handleChange}
                    value={formik.values.c_password}
                  />
                  {formik.errors.c_password ? (
                    <div className="invalid-feedback d-block">
                      {" "}
                      {formik.errors.c_password}{" "}
                    </div>
                  ) : null}
                </div>
              </div>

              <button type="submit" className="btn btn-style hover-style-2">
                {strings["continuer"]}
              </button>

              <h5>
                {strings["go_login_text"]} &nbsp;
                <Link to="/login">
                  <strong>{strings["here"]}</strong>
                </Link>
              </h5>
            </form>
          </div>
        </div>
      </Layout>
    </Fragment>
  );
}

export default multilanguage(Register);
