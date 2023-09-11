import { Formik, useFormik } from "formik";
import React, { Fragment } from "react";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";
import { Button } from "react-scroll";
import { multilanguage } from "redux-multilanguage";

const Newsletter = ({ strings }) => {
  const validate = (values) => {
    const errors = {};

    if (!values.email) {
      errors.email = strings['required'];
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = strings['ivalide_email'];
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validate,
    onSubmit: (values) => {
      toast(strings["email_send"], {
        className: "toast-custom",
        icon: "👍",
      });
    },
  });

  return (
    <Fragment>
      <div className="newsletter-area">
        <div className="container">
          <div className="row">
            <div className="col-12 wrapper">
              <h3 className="title">{strings["nous_rejoindre"]}</h3>
              <p className="text-center">
                {" "}
                {strings["subscribe_to_newsletter"]}{" "}
              </p>

              <form onSubmit={formik.handleSubmit}>
                <div className="col-12 col-md-10 col-lg-8 m-auto">
                  <input
                    className=""
                    placeholder={strings["your_adresse"]}
                    
                    id="email"
                    name="email"
                    type="text"
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

                <div className="fadeInUp custom-btn  btn-hover">
                  <button to="/" className="outline animated rounden-btn btn-sm">
                    {strings["send"]}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default multilanguage(Newsletter);
