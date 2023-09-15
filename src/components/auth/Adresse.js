import React from "react";
import { multilanguage } from "redux-multilanguage";
import Divider from "@mui/material/Divider";
import { useFormik } from "formik";
import { insertUserAdresse } from "../../helpers/auth";
import toast from 'react-hot-toast';

const Adresse = ({ strings }) => {

  const validate = (values) => {
    const errors = {};

    if (!values.lastname) {
      errors.lastname = strings['required'];
    }
    if (!values.firstname) {
      errors.firstname = strings['required'];
    }

    if (!values.phone) {
      errors.phone = strings['required'];
    }
    
    if (!values.country) {
      errors.country = strings['required'];
    }

    if (!values.city) {
      errors.city = strings['required'];
    }
    if (!values.code_postale) {
      errors.code_postale = strings['required'];
    }
    if (!values.rue) {
      errors.rue = strings['required'];
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      gender: "mr",
      firstname: "",
      country: "",
      lastname: "",
      phone: "",
      city: "",
      code_postale: "",
      rue: "",
      subscribe_sms: false,
      subscribe_email: false,
    },
    validate,
    onSubmit: (values) => {
      insertUserAdresse(values);
      toast(strings['adresse_added'] , { className:'toast-custom', icon: "👍" });
      window.location.reload();
    },
  });

  return (
    <div className="login-area-wrapper">
      <h4 className="text-capitalize fw-2"> {strings["adresse_livraison"]} </h4>
      <Divider component="div" />
      <form className="pt-30" onSubmit={formik.handleSubmit}>
        <div className="row mb-3">
          <div className="col-12 col-md-3">
            <label>{strings["gender"]}</label>
            <select
              name="gender"
              type="text"
              id="gender"
              onChange={formik.handleChange}
              value={formik.values.gender}
            >
              <option value="mr"> Mr </option>
              <option value="ms"> Ms </option>
            </select>
          </div>
        </div>

        <div className="row mb-6">
          <div className="col-12 col-md-6 mb-3">
            <label>{strings["lastname"]}</label>
            <input
              name="lastname"
              type="text"
              id="lastname"
              onChange={formik.handleChange}
              value={formik.values.lastname}
            />
          </div>

          <div className="col-12 col-md-6 mb-3">
            <label>{strings["firstname"]}</label>
            <input
              name="firstname"
              type="text"
              id="firstname"
              onChange={formik.handleChange}
              value={formik.values.firstname}
            />
            {formik.errors.firstname ? (
              <div className="invalid-feedback d-block">
                {" "}
                {formik.errors.firstname}{" "}
              </div>
            ) : null}
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-12 col-md-6">
            <label>{strings["phone"]}</label>
            <input
              name="phone"
              type="text"
              id="phone"
              onChange={formik.handleChange}
              value={formik.values.phone}
            />
            {formik.errors.phone ? (
              <div className="invalid-feedback d-block">
                {" "}
                {formik.errors.phone}{" "}
              </div>
            ) : null}
          </div>

          <div className="col-6">
            <label>{strings["code_postale"]}</label>
            <input
              name="code_postale"
              type="text"
              id="code_postale"
              onChange={formik.handleChange}
              value={formik.values.code_postale}
            />
            {formik.errors.code_postale ? (
              <div className="invalid-feedback d-block">
                {" "}
                {formik.errors.code_postale}{" "}
              </div>
            ) : null}
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-12 col-md-6">
            <label>{strings["country"]}</label>
            <select
              name="country"
              type="text"
              id="country"
              onChange={formik.handleChange}
              value={formik.values.country}
            >
              <option value=""> {strings['choose']} </option>
              <option value="france"> france </option>
              <option value="england"> england </option>
            </select>
          </div>

          <div className="col-12 col-md-6">
            <label>{strings["city"]}</label>
            <input
              name="city"
              type="text"
              id="city"
              onChange={formik.handleChange}
              value={formik.values.city}
            />
            {formik.errors.city ? (
              <div className="invalid-feedback d-block">
                {" "}
                {formik.errors.city}{" "}
              </div>
            ) : null}
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-6">
            <label>{strings["rue"]}</label>
            <input
              name="rue"
              type="text"
              id="rue"
              onChange={formik.handleChange}
              value={formik.values.rue}
            />
            {formik.errors.rue ? (
              <div className="invalid-feedback d-block">
                {" "}
                {formik.errors.rue}{" "}
              </div>
            ) : null}
          </div>
        </div>

        <div className="d-flex flex-row bd-highlight mb-3">
          <div className="p-2 bd-highlight">
            <p>{strings["subscribe_message"]} : </p>
            <div className="row">
              <label className="col-6 flex-row">
                <input
                  name="subscribe_email"
                  type="checkbox"
                  id="subscribe_email"
                  onChange={formik.handleChange}
                  value={formik.values.subscribe_email}
                />
                <span className="">{strings["email"]}</span>
              </label>

              <label className="col-6 flex-row">
                <input
                  name="subscribe_sms"
                  type="checkbox"
                  id="subscribe_sms"
                  onChange={formik.handleChange}
                  value={formik.values.subscribe_sms}
                />
                <span>{strings["sms"]}</span>
              </label>
            </div>
          </div>
        </div>

        <button type="submit" className="btn btn-style hover-style-2">
          {strings['continuer']}
        </button>
      </form>
    </div>
  );
};

export default multilanguage(Adresse);
