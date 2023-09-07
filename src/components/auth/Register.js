import React, { useEffect } from "react";
import { useFormik } from "formik";
import { getToken, setToken } from "../../helpers/auth";
import Login from "../../pages/other/Login";

const Register = ({ setModalLogin, strings }) => {
  const validate = (values) => {
    const errors = {};
    if (!values.password) {
      errors.password = "Cet champ est obligatoire";
    } else if (values.password.length < 8) {
      errors.password = "Au moins 8 caractères";
    }

    if (values.c_password != values.password) {
      errors.c_password = "Mots de passes inconformes";
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

      // alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div className="login-area-wrapper">
      <h4 className="pb-20">{strings["creer_compte"]}</h4>
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
            <div class="invalid-feedback"> sssssss </div>
            {formik.errors.email ? (
              <div class="invalid-feedback d-block">
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
              <div class="invalid-feedback d-block">
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
              <div class="invalid-feedback d-block">
                {" "}
                {formik.errors.c_password}{" "}
              </div>
            ) : null}
          </div>
        </div>

        <button type="submit" class="btn btn-style hover-style-2">
          {strings["continuer"]}
        </button>
      </form>

      <h5>
        {strings["go_login_text"]} &nbsp;
        <button onClick={() => setModalLogin(true)}>
          <strong>{strings["here"]}</strong>
        </button>
      </h5>
    </div>
  );
};

export default Register;
